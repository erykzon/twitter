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
    
    test("Paso3: Update user naame", () =>{

        const user = UserService.create(1,"erkz", "Erick")
        UserService.updateUserUsername(user, "erkz")
        expect(user.username).toBe("erkz")
    })   

    test("Paso4: Given a list of user give me the list of usernames", () =>{

        const user1 = UserService.create(1,"erykzon1", "Erick")
        const user2 = UserService.create(2,"erykzon2", "Erick")
        const user3 = UserService.create(3,"erykzon3", "Erick")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("erykzon1")
        expect(usernames).toContain("erykzon2")
        expect(usernames).toContain("erykzon3")
    })   
})