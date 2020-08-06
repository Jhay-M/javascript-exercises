const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        result = true;
    } else if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
        result = false;
    } else if (year % 4 == 0 && year % 100 != 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

module.exports = leapYears
