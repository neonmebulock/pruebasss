const express = require('express');
// const querystring = require('querystring');
const sanitizeHtml = require('sanitize-html');
const router = express.Router();
const escape = require('escape-html');


// Login Inciar Session
router.get('/login', (req, res) => {
 res.render('login', {
        title: 'Sistema Escolar || Login'
    });
});


//Page setting
router.get('/setting', (req, res) => {
    res.render('setting', {
        title: 'Sistema Escolar || Setting',
        span:'Configuracion'
    });
});


//Pagina Home
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Sistema Escolar || Home',
        span:'Inicio'
    });
});


//Pagina periods
// router.get('/periods', (req, res) => {
//     const resul = '<div>Código HTML seguro</div>';
//     const safeHtml = escape(resul);
//     res.render('periods', {
//         title: 'Sistema Escolar || Periods',
//         span:'Periodos',
//         resul: safeHtml
//     });
// });

router.get('/periods', (req, res) => {
    res.end('<h1 class="hola">Holaaa</h1>');


});

//Page administrative
router.get('/administrative', (req, res) => {
//     const resul = `
//     <div class="container">
//     <h1 class="title">Título</h1>
//     <p class="paragraph">Parrafo</p>
//   </div>
//     `;
    res.render('administrative', {
        title: 'Sistema Escolar || Administrative',
        span:'Administrativos',
        // resul: resul
    });
});

//Page users
router.get('/users', (req, res) => {
    res.render('users', {
        title: 'Sistema Escolar || Users',
        span:'Usuarios'
    });
});

//Page teachers
router.get('/teachers', (req, res) => {
    res.render('teachers', {
        title: 'Sistema Escolar || Teachers',
        span:'Profesores'
    });
});

//Page students
router.get('/students', (req, res) => {
    res.render('students', {
        title: 'Sistema Escolar || Students',
        span:'Estudiantes'
    });
});

//Page subjects
router.get('/subjects', (req, res) => {
    res.render('subjects', {
        title: 'Sistema Escolar || Subjects',
        span:'Asignaturas'
    });
});


module.exports = router;

