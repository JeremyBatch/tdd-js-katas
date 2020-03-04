const Greeter = require('../Greeter');

describe('Greeter', ()=>{  
    let grt
    beforeEach ( () => {
        grt = new Greeter()
    })

    test("should say hello", () => {
        const result = grt.greet()
        expect(result).toEqual("hello!") 
    })
    test("should say hello to person", () =>  {
        const result = grt.greet("Jeremy")
        expect(result).toEqual("hello Jeremy!") 
    })
})
