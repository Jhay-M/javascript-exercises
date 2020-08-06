const sumAll = function(x, y) {
    let i = x;
    let sum = x;

    if (x > y) {
        do {
            sum += (x - 1);

            x--;
            i--;
        } while (i > y);
    } else if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number") {
        sum = 'ERROR';
    } else {
        do {
            sum += x + 1;

            x++;
            i++;
        } while (i < y);
    }    
    return sum;
}

module.exports = sumAll
