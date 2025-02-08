const sumAll = function(num1, num2) {
    let sum = 0;
    //Check if the first number is greater than the second, if this happens, we swap them.
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    } 
    //Now we assign the new numbers one and two to he n values, if no swap happened then they stay in the same order.
    let n1 = num1;
    let n2 = num2;
    //Now we sum all the values between number one and two
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
