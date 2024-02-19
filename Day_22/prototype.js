/* 
1.  JavaScript exhibits prototypal behavior.

2.  Classes, the 'this' keyword, the 'new' keyword, and access to prototypal
    inheritance are all due to the prototype.

3.  Arrays and strings are objects in JavaScript. Objects have no parent.
    In JavaScript, almost everything is an object. */

// ---------------------------------------------

const myHeroes = ["Umar Farooq", "Salahudeen Ayubi"];
const heroesPower = {
  Umar_Farooq: "Strategy",
  Salahudeen_Ayubi: "Yaruslim",
  getUmarFarooqPower: function () {
    console.log(`Umar Farooq's power was:  ${this.Umar_Farooq}`);
  },
  getSalahudeenAyubiPower: function () {
    console.log(`Salahudeen Ayubi's power was:  ${this.Salahudeen_Ayubi}`);
  },
};

Object.prototype.AhmadFaraz = () => {
  console.log(`Web3 learner`);
};
heroesPower.AhmadFaraz();

console.log(heroesPower);
