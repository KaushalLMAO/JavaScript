// work 1
function thermostat() {
  class ctok {
    constructor(c) {
      this.k = c + 273;
    }
    get kelvin() {
      return this.k;
    }
  }
  return ctok;
}
let value = thermostat();
let val1 = new value(25);
console.log(val1.kelvin);

// work 2
function addgay() {
  class add {
    constructor(firstName, lastName) {
      this.fname = firstName;
      this.lname = lastName;
    }
    get names() {
      return `${this.fname} ${this.lname} is gay`;
    }
  }
  return add;
}
let player1 = addgay();
let player1Name = new player1("Rahul", "Aryal");
console.log(player1Name.names);
