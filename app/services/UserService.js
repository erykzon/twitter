const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getinfo(user){
        return Object.values(user)
    }

    static updateUserUsername(user, username){
        user.setusername = username

    }

    static getAllUsernames(user){
        const userUsernames = user.map( user => user.username)
        return userUsernames
    }
}


module.exports = UserService