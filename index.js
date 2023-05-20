function isPalindrome(word) {
    var reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}