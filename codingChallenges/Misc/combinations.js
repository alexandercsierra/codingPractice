/*
Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120

https://edabit.com/challenge/tRx22rECqK4dTJTg8
*/

//my solution
function combinations(items) {
	let product;
	for(let i=0; i<arguments.length; i++){
		if(arguments[i] !== 0){
			if(product){
				product*=arguments[i];
			} else{
				product = arguments[i]
			}
		}
		
	}
	return product;
}

//edabit top solution
function combinations(items) {
	return [...arguments].reduce((acc,v) => v ? acc*v : acc+v, 1)
}