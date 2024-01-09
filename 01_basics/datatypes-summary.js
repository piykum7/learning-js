// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint



//reference (Non premitive)

// Array, Objects, Functions

let id = Symbol("123")
let id2 = Symbol("123")
//console.log(id2);

const heros = ["shaktiman", "superman", "batman"]

let obj1 = {
    name: "aman",
    age: 22,
    sex: "male",
}

const myfunction = function(){
    console.log("hello");
}

//console.log(typeof(myfunction));

//++++++++++++++++++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Premitive)

let myytname = "aman"
let anothername = myytname
anothername = "chaiaurcode"

//console.log(anothername);

let obj2=obj1
obj2.age = 56
console.log(obj1.age);