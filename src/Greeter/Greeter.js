class Greeter{
    consructor() {}
    greet(person = "") {
        return `hello${person !== '' ? ' ' + person: ''}!`
    }

}

module.exports = Greeter