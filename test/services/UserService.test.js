const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("Paso1 : Create a new user usiing the User Service", ()=> {
        const user = UserService.create(1,"erykzon", "Erick")
        expect(user.username).toBe("erykzon")
        expect(user.name).toBe("Erick")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("Paso2: Get all user fata in a list", () =>{

        const user = UserService.create(1,"erykzon", "Erick")
        const userInfoInList = UserService.getinfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("erykzon")
        expect(userInfoInList[2]).toBe("Erick")
        expect(userInfoInList[3]).toBe("Sin bio")
        
    })

})