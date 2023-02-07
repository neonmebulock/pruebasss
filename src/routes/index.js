const express = require('express');
const router = express.Router();
const getDestination = require('./routesHrf').getDestination;
const getDestinationExit = require('./routesHrf').getDestinationExit;


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
        span:'Configuracion',
        active: 'setting',
        activeMenu: 'setting'

    });
});


//Pagina Home
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Sistema Escolar || Home',
        span:'Inicio',
        active: 'inicio',
        activeMenu: 'inicio'
    });
});


//Pagina periods
router.get('/periods', (req, res) => {
    const destination = getDestination(req.url);
    const routesExitL = '/login';
    res.render('periods', {
        title: 'Sistema Escolar || Periods',
        span:'Periodos Escolares',
        active: 'periods',
        activeMenu: 'periods',
        destination: destination,
        destinationExit: routesExitL

    });
});
//Page Add periods
router.get('/add_Periods', (req, res) => {
    res.render('add_Periods', {
        title: 'Sistema Escolar || Periods',
        span:'añadir Periodo',
        active: 'periods',
        destination: getDestination(req.url),
        destinationExit:  getDestinationExit(req.url),

    });
});

//Page Edit Periods

router.get('/edit_periods', (req, res) => {
    res.render('edit_periods', {
        title: 'Sistema Escolar || Periods',
        span:'Editar Periodo',
        active: 'periods',
        destination: getDestination(req.url),
        destinationExit:  getDestinationExit(req.url),

    });
});

//Page Del Periods
router.get('/del_Periods', (req, res) => {
    res.render('del_Periods', {
        title: 'Sistema Escolar || Periods',
        span:'Eliminar Periodo',
        active: 'periods',
        destination: getDestination(req.url),
        destinationExit:  getDestinationExit(req.url),

    });
});

//Page administrative
router.get('/administrative', (req, res) => {
    const destination = getDestination(req.url);
    const routesExitL = '/login';
    res.render('administrative', {
        title: 'Sistema Escolar || Administrative',
        span:'Administrativos',
        active: 'administrative',
        activeMenu: 'administrative',
        destination: destination,
        destinationExit: routesExitL


    });
});
//Page Add Administrative
router.get('/addAdministrative', (req, res) => {
    res.render('addAdministrative', {
        title: 'Sistema Escolar || Administrative',
        span:'Añadir Administrativos',
        active: 'administrative',
        activeMenu: 'administrative',
        destination: getDestination(req.url),
        destinationExit:  getDestinationExit(req.url),
    });
});

//Page users
router.get('/users', (req, res) => {
    const routesExitL = '/login';
    const destination = getDestination(req.url);
    res.render('users', {
        title: 'Sistema Escolar || Users',
        span:'Usuarios',
        active: 'users',
        activeMenu:'users',
        destination: destination,
        destinationExit: routesExitL
    });
});


//Edit  Users
router.get('/editUsers', (req, res) => {
    const routesExitL = '/login';
    const destination = getDestination(req.url);
    res.render('editUsers', {
        title: 'Sistema Escolar || Users',
        span:'Usuarios',
        active: 'users',
        activeMenu:'users',
        destination: destination,
        destinationExit: routesExitL
    });
});




//Page teachers
router.get('/teachers', (req, res) => {
    res.render('teachers', {
        title: 'Sistema Escolar || Teachers',
        span:'Profesores',
        active: 'teachers',
        activeMenu:'teachers'
    });
});

//Page students
router.get('/students', (req, res) => {
    res.render('students', {
        title: 'Sistema Escolar || Students',
        span:'Estudiantes',
        active: 'students',
        activeMenu: 'students'
    });
});

//Page subjects
router.get('/subjects', (req, res) => {
    res.render('subjects', {
        title: 'Sistema Escolar || Subjects',
        span:'Asignaturas',
        active: 'subjects',
        activeMenu: 'subjects'
    });
});


//page chat
router.get('/chat', (req, res) => {
    res.render('chat', {
        title: 'Sistema Escolar || Chat',
        span:'Chat',
        active: 'chat',
        activeMenu: 'chat'
    });
});


module.exports = router;



