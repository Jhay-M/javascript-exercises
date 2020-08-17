const fibonacci = (index => {
    let indexNum = Number(index);
    if (indexNum < 0) {
        return "OOPS";
    }
    let arr = [1, 1];
    for (i = 2; i < indexNum; i++) {
        let add = arr[i - 1] + arr[i - 2];
        arr.push(add);
    };
    return arr[indexNum - 1];
});

module.exports = fibonacci
