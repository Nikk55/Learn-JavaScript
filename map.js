// //Key value pair : Key should be unique
// const map1=new Map();
// map1.set(3,90);
// map1.set("Rohit",45);
// map1.set(20,"Mohan");
// // map1.set("Rohit",40);  value ko update krega

// map1.delete(3);

// // console.log(map1);
// console.log(map1.has("Rohit"));
// console.log(map1.size);
// map1.clear();
// console.log(map1);

// 2nd Method For create Map

const map1=new Map([
    [4,"rohit"],
    ["Mohan","Rohan"],
    [30,9],
    [63,78],
]);

for(let [key,value] of map1) {
    console.log(key,value);
}

// console.log(map1);

// Object 
// Keys : String or Symbol
// Maps:
// Keys : number , String , Object, Array kuch bhi ho skti hai !

// Home Work : for each in map

[...map1].forEach((value)=> console.log(value));

// Java Script ka code kaise execute hota hai ! kl ki study