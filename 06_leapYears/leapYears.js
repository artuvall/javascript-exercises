const leapYears = function(year) {
    if (year % 400 === 0) {
        return true; //divisible by 400, leap years
    } else if (year % 100 === 0) {
        return false; //divisible by 100 but not 400, not leap years
    } else if (year % 4 === 0) {
        return true; //divisible by 4, leap years
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
