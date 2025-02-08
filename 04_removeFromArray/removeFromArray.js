const removeFromArray = function(array, ...num) {
    let updatedArray  = [];
    array.forEach(item => {
        if (!num.includes(item)) {
            updatedArray.push(item);
          }
    });
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
