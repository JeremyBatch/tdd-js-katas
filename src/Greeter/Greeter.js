class Greeter {
  consructor(millisecondsFnc) {
    this.millisecondsFnc = millisecondsFnc;
  }
  greet(person = "") {
    const date = new Date(this.millisecondsFnc())
    const hours = date.getHours();
    if (this.currentDate.getHours() >= 6 && this.currentDate.getHours() <= 12) {
      return `Good morning${
        person !== ""
          ? " " + person.trim().replace(/^\w/, c => c.toUpperCase())
          : ""
      }`;
    } else {
      return `Hello${
        person !== ""
          ? " " + person.trim().replace(/^\w/, c => c.toUpperCase())
          : ""
      }`;
    }
  }
}

module.exports = Greeter;
