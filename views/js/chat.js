$(function (){

    const socket = io();

    //Obteniendo elementos de form interface

    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    //Obteniendo datos de el form ninkname
    const $nikForm = $('#nikForm');
    const $nikError = $('#nikError');
    const $nikName = $('#nikname');
    const $user = $('#username');
    const $mensajes = $('#messages');
    const $contUSer = $('.divuser');
    const $contAnimationCHat = $('.content-animation-chat');

    let currentUser;
    let messages = []; //Menssaje sin conexion
    $nikForm.submit(e => {
        e.preventDefault();
        currentUser = $nikName.val();
        socket.emit('new user', $nikName.val(),  data => {
            if(data){
                $contUSer.addClass('bloock');
                $('#divuser').hide();
                $('#divchat').show();
                $('#nikForm').hide();
                $contAnimationCHat.hide();
            }else{
                $nikError.html(`
                <div class="error-user">
                    <h2>Error De Usuario</h2>
                </div>
                `);
                setTimeout(() => {
                    $nikError.html("");
                }, 3000);
            }
            $nikName.val('');
        });
    })
    //Eventos
    window.addEventListener("offline", function() {
  console.log("No hay conexión a Internet");
});

window.addEventListener("online", function() {
  console.log("Conexión a Internet reestablecida");
  messages.forEach(message => {
    socket.emit('send message', message, data => {
        $mensajes.append(`<li class="self"><p class="error">${data}</p></li>`);
    });
  });
  messages = [];
});


$messageForm.submit(e => {
    e.preventDefault();
    if(navigator.onLine) {
        socket.emit('send message', $messageBox.val(), data => {
            $mensajes.append(`<li class="self"><p class="error">${data}</p></li>`);
        });
        new Audio('../css/envio.mp3').play();
        $messageBox.val('');
    } else {
        messages.push($messageBox.val());
        console.log("El mensaje se ha guardado temporalmente");
    }
});


    // $messageForm.submit(e => {
    //     e.preventDefault();
    //     $messageBox.val();
    //     socket.emit('send message', $messageBox.val(), data => {
    //         $mensajes.append(`<li class="self"><p class="error">${data}</p></li>`);
    //     });
    //     new Audio('../css/envio.mp3').play();
    //     $messageBox.val('');
    // });
    socket.on('new message', function(data){
        displayMessage(data);
    });
    socket.on('usernames', data => {
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `
            <div class="div sss">
            <span class="icon icon-copy ">person</span>
            <p class="usercopy">${data[i]}</p>
            <button style="float:right;cursor:pointer;background: transparent;color: #fff;border: 0px;" class="copiar">
            <span class="icon icon-copy">content_copy</span>
            </button>
            <span class="copied-text">Texto Copiado</span>
            </div>`
        }
        $user.html(html);
    });
    socket.on('whisper', data =>{
        $mensajes.append(`<li class="other whisper"><b>${data.nick}:</b> <br> ${data.msg} <br> <br> <span class="time">${data.hour}</span></li>`);
    });

    socket.on('load old msg', messages  =>{
        // for (let i = 0; i < msgs.length; i++) {
        //     displayMsg(msgs[i]);
        // }
        messages.forEach(message => {
            displayMsg(message);
        });

    });

    socket.on('error message', function(data){
        $nikError.html(`
        <div class="error-user">
            <h2>El campo no puede estar vacio</h2>
        </div>
        `);
        setTimeout(() => {
            $nikError.html("");
        }, 3000);
    });

    function displayMessage(data) {
        const $mensajes = $('#messages');
        if(data.nick === currentUser) {
            $mensajes.append(`<div class="contMessageSelf">
            <img src="https://github.com/ortichon.png" class="imgUser">
            <li class="self"> <b>${data.nick}:</b> <br> ${data.msg} <br> <br> <span class="time">${data.hour}</span></li></div>`);
        } else {
            $mensajes.append(`
            <div class="contMessageOther">
            <li class="other"> <b>${data.nick}:</b> <br>  ${data.msg}  <br> <br> <span class="time">${data.hour}</span> </li>
            <img src=https://d500.epimg.net/cincodias/imagenes/2019/11/04/lifestyle/1572892359_005767_1572892909_noticia_normal.jpg" class="imgUserOther"> 
            </div>
            `);
        }
    }
    function displayMsg(message){
        let hours = parseInt(message.hour.substring(0, 2));
        let minutes = message.hour.substring(3);
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let formattedTime = `${hours}:${minutes} ${ampm}`;
    const $mensajes = $('#messages');
        $mensajes.append(`
        <div class="contMessageOther">
        <li class="other"><p class="loadMessage"><b>${message.user}:</b> ${message.message}<br>${formattedTime}</p></li>
        <img src="https://github.com/Thatkookooguy.png" class="imgUserOther">
        </div>
        `);
    }

});


