const { TestWatcher } = require('jest')
const UserView = require('./../../app/views/UserView')

describe("Test for Userview", () =>{

    test("Return an error object when try to createa new user with an null playload", () =>{
        const playload = null
        const result = UserView.createUser(playload)
        expect(result.error).toMatch(/playload no existe/)
    })

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const playload = {username: null, name:12, id: "id"}
        const result = UserView.createUser(playload)
        expect(result.error).toMatch(/necestas tener un valor valido/)
    })

})