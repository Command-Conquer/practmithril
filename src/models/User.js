// src/models/User.js

var m = require("mithril")
//rellena el componente con usuarios de herokuapp
var User = {
    list: [],
    //este modelo expone dos miembros, User.list y el método User.loadlist
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true, //se usan cookies
        }) //devuelve un json que mapea a un objeto javascript o array, en este caso asigna result.data a User.list (array)
            .then(function(result) {
                User.list = result.data
            })
    },

    //recupera el user dependiendo del id
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
            .then(function(result) {
                User.current = result
            })
    }
}

module.exports = User
