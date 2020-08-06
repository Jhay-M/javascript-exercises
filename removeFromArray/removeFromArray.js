const removeFromArray = function(arr, ...moreArgs) {
    for (let i = 0; i < moreArgs.length; i++) {
        if (arr.indexOf(moreArgs[i]) == -1) {
            continue;
        } else {
        arr.splice(arr.indexOf(moreArgs[i]), 1);
        }
    }
    return arr;
}

module.exports = removeFromArray
