const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const socketio = require ('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const mongoose = require('mongoose');



const router = require('./src/routes/index');
app.use('/', router);



require('./src/views/js/socket') (io);

//conexion base de datos
mongoose.connect('mongodb+srv://keku:ooqKdYaQb1zIiVDH@cluster0.uj02c5w.mongodb.net/?retryWrites=true&w=majority')
.then(db => console.log('server connected'))
.catch(err => console.error(err));


//Puerto
app.set('port', process.env.PORT || 3000);
//rutas
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, './src/views')));


app.use('/', require('./src/routes/index'));

server.listen(app.get('port'), () => {
    console.log(`servidor en puerto`, app.get('port'));
});



//Page 404
// app.use(/^(?!\/(login|setting|index|periods|add_Periods|edit_periods|del_Periods|administrative|addAdministrative|users|...))/,
// function(req, res, next) {
//     res.status(404);
//     res.render('404');
// });


app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 Error',
        message: 'La página que estás buscando no existe.'
    });
});

app.use((err, req, res, next) => {
    res.status(500).render('404', {
        title: '500 Error',
        message: 'Ocurrió un error en el servidor.'
    });
});






