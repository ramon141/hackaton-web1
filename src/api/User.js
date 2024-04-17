const { default: api } = require("./axios");

function login(email, password) {
    return api.post('/login', {
        email, password
    });
}

function signup(name, email, password, universityName) {
    return api.post('/register', {
        name, email, password, university_name: universityName
    });
}

export const UserAPI = {
    login, signup
}