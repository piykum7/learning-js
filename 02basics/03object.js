// singleton
// Object.create        // using constructors
// object literals

const s1 = Symbol("k1")

const jsu = {
    name: "aman",
    age: 22,
    location: "ghazipur",
    arr: [1,2,3,4],
    "gender": "male",
    [s1]: "k1"                // way for declaring symbols
}

//console.log(jsu.name);      // will not work for keys declared in double quotes
//console.log(jsu["name"]);
//console.log(jsu[s1]);

//jsu.name = "sinha"
//console.log(jsu.name);

//Object.freeze(jsu)      // after this no change possible in object
//jsu.name = "amar"
//console.log(jsu);

jsu.gre = function(){
    console.log("hello");
}

jsu.gre2 = function(){
    console.log(`hello ${this.name}`);
}

//console.log(jsu.gre());     // function return
//console.log(jsu.gre);       // function reference return

console.log(jsu.gre2());