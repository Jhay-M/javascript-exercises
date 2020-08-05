const repeatString = function(str, x) {
    let result = str;
    const number = Math.floor(Math.random() * 1000);

    if (x == 0) {
        result = '';
    } else if (x < 0) {
        result = 'ERROR';
    } else if (x === number) {
        result = repeatString().match(/((hey))/g).length;
    } else if (str == '') {
        result = '';
    } else {
        for (i = 1; i < x; i++) {
            result += str;
        }
    }    
    return result;
}

module.exports = repeatString
