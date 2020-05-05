// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).

function charCountRegEx(myChar, str) {
	const regex = new RegExp(myChar, "g");
	let match = str.match(regex);
	console.log(match);
	if(match){
		return match.length;
	}
	return 0;
}

function charCountFilter(myChar, str) {
	let arr = str.split('');
	let newArr = arr.map(char => char === myChar);
	return newArr.length;
}

function charCountSplit (myChar, str){
    return str.split(char).length-1;
}
