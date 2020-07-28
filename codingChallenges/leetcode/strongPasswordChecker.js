/*
A password is considered strong if below conditions are all met:

It has at least 6 characters and at most 20 characters.
It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.

Insertion, deletion or replace of any one character are all considered as one change.

https://leetcode.com/problems/strong-password-checker/
*/

/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
    
    if(s.length === 0){
        return 6;
    }
    
    let lower = /[a-z]/g
    let upper = /[A-Z]/g
    let num = /[0-9]/g
    
    let uppers = 0;
    let lowers = 0;
    let nums = 0;
    let repeats = {};
    
    for(let i=0; i<s.length; i++){
        if(s[i].match(lower)){
            lowers+=1;
        }
        else if(s[i].match(upper)){
            uppers+=1;
        }
        else if(s[i].match(num)){
            nums+=1;
        }
        if(s[i] in repeats){
            repeats[s[i]].push(i)
        } else{
            repeats[s[i]] = [i]
        }
    }
    
    let triples = Object.values(repeats).filter(arr=>arr.length > 2);
    
    let numOfTriples = findConsecutives(triples);
    
    let numOfCorrections = 0;
    
    if(numOfTriples > 0){
        numOfCorrections += numOfTriples;
    }
    
    if(uppers < 1){
        numOfCorrections += 1;
    }
    
    if (lowers < 1){
        numOfCorrections += 1;
    }
    
    if (nums < 1){
        numOfCorrections +=1;
    }
    
    if(s.length < 6){
        let remaining = 6 - s.length;
        if(numOfCorrections <= remaining){
            return remaining;
        }
    }
    
    if(s.length > 20){
        numOfCorrections += 20 - s.length
    }
    
    return numOfCorrections
    
};


const findConsecutives = (arr) => {
    let result = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] + 1 === arr[i][1] && arr[i][0] + 2 === arr[i][2]){
            result++;
        }
    }
    return result;
}