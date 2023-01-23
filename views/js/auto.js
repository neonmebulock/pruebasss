
var input = document.getElementById("message");
var users = ["usuario1", "usuario2", "usuario3"]; // lista de usuarios conectados
var at = new At.core(input, {
    at: "/w",
    data: users
});