const User = require('./../../app/models/User')

describe ("Test para user", () =>{
    test("Requerimeinto 1 :Crear User" ,() => {
        const user = new User(1,"erykzon", "Erick","Bio","dateCreated","lasUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("erykzon")
    })
    test("Requerimeinto 1 :Fechas en atributos de user", () => {

        const user = new User (1,"")
        expect(user.dateCreated).not.toBeUndefined()        
        expect(user.lastUpdate).not.toBeUndefined()
    })

})

