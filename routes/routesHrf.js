const routes = {
    '/users': '/',
    '/administrative': '/addAdministrative',
    '/periods': '/add_Periods',
    '/menu4': '/newRoute4'
}

const routesExit = {
    '/users': '/users',
    '/addAdministrative': '/administrative',
    '/periods': '/periods',
}

exports.getDestination = (activeLink) => {
    return routes[activeLink] || '#';
}

exports.getDestinationExit = (activeLinkExit) => {
    return routesExit[activeLinkExit] || '#';
}