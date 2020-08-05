const reverseString = function(str) {
    let toArray = str.split("");
    let revArray = toArray.reverse();
    let toString = revArray.join('');

    return toString;
}

module.exports = reverseString
