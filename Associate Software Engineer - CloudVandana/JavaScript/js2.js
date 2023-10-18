// Perform sorting of an array in descending order.

var numbers = [5, 2, 8, 1, 3];
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Sorted array in descending order: " + numbers);
