"use strict";
console.log('Hello NodeJS!');
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(arr[i - 1]);
}
