let user1={
    name:"Rohit",
    age:20,
}

let user2 ={
    ammount:20,
    money:50,
}

user2.__proto__=user1;
// console.log(user2.name);
let arr2=[10,20,30,40];
// Prototype Chaining
// Most Important Interview Questions -> Prototype Chainin
console.log(arr2.__proto__==Array.prototype);
console.log(arr2.__proto__.__proto__==Object.prototype);
console.log(arr2.__proto__.__proto__.__proto__==null);