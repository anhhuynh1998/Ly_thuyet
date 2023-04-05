//bài 10 : Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn
let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
}
console.log(arr);
function dblEven(array) {
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (Number(array[i]) % 2 == 0 && Number(array[i + 1]) % 2 == 0) {
            count++;
        }
    }
    return count;
}
console.log(dblEven(arr));