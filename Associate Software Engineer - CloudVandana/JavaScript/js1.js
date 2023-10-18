// Take a sentence as an input and reverse every word in that sentence. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
    var words = sentence.split(" ");
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });
    var reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}
var inputSentence = "This is a sunny day";
var reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence: " + reversedSentence);
