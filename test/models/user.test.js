const User = require('./../../app/models/User')

describe ("Test para user", () =>{
    test("Requerimeinto 1 :Crear User" ,() => {
        const user = new User(1,"erykzon", "Erick","Bio","dateCreated","lasUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("erykzon")
    })
    test("Requerimeinto 1 :Fechas en atributos de user", () => {

        const user = new User (1,"erykzon", "Erick","Bio")
        expect(user.dateCreated).not.toBeUndefined()        
        expect(user.lastUpdate).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando getters", () => {
        const user = new User (1,"erykzon", "Erick","Bio")
        expect(user.getUsername).toBe("erykzon")

    })
    test("Requerimeinto 4 : Agregando setters", () => {
        const user = new User (1,"erykzon", "Erick","Bio")
        user.setUsername = "erkz"
        expect(user.username).toBe("erkz")

    })
})

