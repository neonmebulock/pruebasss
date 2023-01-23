const Chat = require('../models/ChatMessage');
module.exports = function(io){

let users = {};

io.on('connection', async socket => {


    let messages = await Chat.aggregate([
        {
            $project: {
                user: 1,
                message: 1,
                hour: { $dateToString: { format: "%H:%M", timezone: "America/Bogota", date: "$created_at" } }
            }
        }
    ]);


    // let messages = await Chat.find({});
    // messages = messages.map(message => {
    //     message.hour = message.created_at.toLocaleString('en-CO', { hour: 'numeric', minute: 'numeric', hour12: true });
    //     return message;
    // });
    socket.emit('load old msg', messages);
    socket.on('new user', (data, cb) => {
        if(!data){
            socket.emit('error message', 'Error: El mensaje no puede estar vacío');
            return;
        }
        if (data in users) {
        cb(false);
    } else {
        cb(true);
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNicknames();
    }
    });

    socket.on('send message', async (data, cb) => {
        //analizar texto antes de enviar mensaje privado
        var msg = data.trim();
        var currentDate = new Date();
        //Comprobar si el input esta vacio
        if(msg === ''){
            cb('Error: El mensaje no puede estar vacío');
            return;
        }
        if (msg.substr(0, 3) === '/w ') {
            msg = msg.substr(3);
            const index = msg.indexOf(' ');
            //si el indice es distinto a -1 si hay texto(mensaje para enviar)
            if (index !== -1) {
                var name = msg.substring(0, index);
                var msg = msg.substring(index + 1);
                //comprobar si el usuario esta en el users
                if (name in users) {
                    users[name].emit('whisper', {
                        msg,
                        nick: socket.nickname,
                        hour: currentDate.toLocaleString('en-CO', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                } else {
                    cb('error Por favor ingresa un usuario valido');
                }
            } else {
                cb('error por favor ingresa tu mensaje');
            }
        } else{
                var newMsg = new Chat({
                        message: msg,
                        user: socket.nickname,
                        hour: currentDate.toLocaleString('en-CO', { hour: 'numeric', minute: 'numeric', hour12: true }),
                        created_at: new Date()
                    });
                    await newMsg.save();
                    io.sockets.emit('new message', {
                        msg: data,
                        nick: socket.nickname,
                        hour: currentDate.toLocaleString('en-CO', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
            }
});
        socket.on('disconnect', data => {
        delete users[socket.username];
        if (!socket.nickname) return;
        delete users[socket.nickname];
        updateNicknames();
        });

        function updateNicknames() {
                io.sockets.emit('usernames', Object.keys(users));
            }
        });
}
