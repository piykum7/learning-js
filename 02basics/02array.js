const mv = ["Ironman", "thor", "spiderman"]
const dc = ["superman", "batman", "flash"]

//mv.push(dc)       //will return mv
//console.log(mv);
//console.log(mv[3][1]);

//mv.concat(dc)
//console.log(mv[3]);

//const alh1 = mv.concat(dc)        //will return new array
//console.log(alh1);

//const alh2 = [...dc, ...mv]
//console.log(alh2);

//const ar1 = [1,2, [3,4], [5,6,[7,8]]]
//const ar2 = ar1.flat(2)
//console.log(ar2);

//console.log(Array.isArray("aman"));
//console.log(Array.from("asder"));
//console.log(Array.from({name: "asder"}));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));