const removeFromArray = function(arr, ...rem) {
    return arr.filter((num) => !rem.includes(num));
};


// Do not edit below this line
module.exports = removeFromArray;
