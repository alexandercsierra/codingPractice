// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input

//Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript



const encryptThis = function(text){
    let words = text.split(" ")
    let encryptedWords = [];
    words.forEach(word => {
        if (word.length === 1){
            encryptedWords.push(word.charCodeAt(0))
        } else if (word.length === 2) {
            let newWord = word.charCodeAt(0);
            newWord += word[1]
            encryptedWords.push(newWord);
        } else{
            let newWord = word.charCodeAt(0);
            newWord += word[word.length-1];
            newWord += word.substring(2, word.length-1);
            newWord += word[1];
            encryptedWords.push(newWord)
        }
    })
    return encryptedWords.join(" ");
}

console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
