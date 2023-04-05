// bài 5 :  Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước
let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
}
console.log(arr);
function logNum(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
logNum(arr);