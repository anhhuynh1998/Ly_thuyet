// bài 6 : Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị 
//tuyệt đối của giá trị đứng liền sau nó
let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
}
console.log(arr);
function numAbs(array) {
    for (i = 0; i < array.length; i++) {
        if (Number(array[i]) > Math.abs(Number(array[i + 1]))) {
            console.log(array[i]);
        }
    }
}
console.log(numAbs(arr));