const User = require('./../../app/models/User')

describe ("Test para user", () =>{
    test("Crear User" ,() => {
        const user = new User(1,"erykzon", "Erick","Bio","dateCreated","lasUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("erykzon")
    })
})

