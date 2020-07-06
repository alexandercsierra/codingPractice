
let arr = ['Joe', 2, 'Ted', 4.98, 14, 'Sam', 'void *', '42', 'float', 'pointers', 5006]

//declare a function that will take in an array as an argument
    //looping over each element
    //console.logging each element plus a \n

//console.loging the function call with the above array



const printNewLines = (arr) => {
    arr.forEach(el => console.log(`${el}\n`))
}

console.log(printNewLines(arr))