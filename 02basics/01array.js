//array

const arr = [1, 2, 3, 4, 5, "aman", true]
const arr2 = new Array(1,3,5,7,9,11)

//console.log(arr.length);

//Array Methods

arr2.push(19)
arr2.pop()
//console.log(arr2);

//arr2.unshift(20)
//console.log(arr2);

//arr2.shift()
//console.log(arr2);

//console.log(arr2.includes(1));
//console.log(arr2.indexOf(56));

const arr3 = arr2.join()
//console.log(arr3);
//console.log(typeof arr3);
//console.log(arr2);

//slice, splice

console.log(arr2.slice(1, 3));      //will not make any change in original array
//console.log("B ", arr2);
console.log(arr2.splice(1, 3));     //will make change in original array
