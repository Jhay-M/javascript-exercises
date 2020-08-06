const ftoc = function(temp) {
    let conv = (temp - 32) * 5/9;
    let roundConv = Math.round(conv * 10) / 10;

    return roundConv;
}

const ctof = function(temp) {
    let conv = (temp * 9/5) + 32;
    let roundConv = Math.round(conv * 10) / 10;

    return roundConv;
}

module.exports = {
  ftoc,
  ctof
}
