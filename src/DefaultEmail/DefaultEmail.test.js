const DefaultEmail = require('./DefaultEmail');
describe('DefaultEmail', ()=>{  
let de 
beforeEach ( () => {
    de = new DefaultEmail();
})

    test("should accept no emails", () => {
        expect(de.get([])).toEqual("")
    })

    test("Should get first primary email", () => {
        expect(de.get([{email: "test@gone.com", isPrimary: false},{email: "goo@gone.com", isPrimary: true}])).toEqual("goo@gone.com")
    })

    test("Should get first email if no primary", () => {
        expect(de.get([{email: "test@gone.com", isPrimary: false},{email: "goo@gone.com", isPrimary: false}])).toEqual("test@gone.com")
    })
})
