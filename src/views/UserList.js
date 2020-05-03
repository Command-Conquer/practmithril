// src/views/UserList.js
var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m(".user-list-item", user.firstName + " " + user.lastName)
        }))
    }
}

//Also notice we didn't do oninit: User.loadList() (with parentheses at the end). The difference is that oninit: User.loadList() calls the function once and immediately, but oninit: User.loadList only calls that function when the component renders. This is an important difference and a common pitfall for developers new to JavaScript: calling the function immediately means that the XHR request will fire as soon as the source code is evaluated, even if the component never renders. Also, if the component is ever recreated (through navigating back and forth through the application), the function won't be called again as expected.
