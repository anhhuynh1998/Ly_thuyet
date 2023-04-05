// bài 7 : Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
}
console.log(arr);
function sqrtIndex(array) {
    for (i = 0; i < array.length; i++) {
        let sqt = Math.sqrt(Number(array[i]));
        if (Number.isInteger(sqt)) {
            console.log(i);
        }
    }
}
console.log(sqrtIndex(arr));