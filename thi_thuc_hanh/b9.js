// bài 9 : Đếm số nguyên tố trong mảng
let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 80);
}
console.log(arr);
function primeCount(array) {
    let countPrime = 0;
    for (i = 0; i < array.length; i++) {
        let count = 0;
        if (array[i] < 2) {
            count = 1;
        } else {
            for (j = 2; j < array[i]; j++) {
                if (Number(array[i]) % j == 0) {
                    count++;
                }
            }
        }
        if (count == 0) {
            countPrime++;
        }
    }
    return countPrime;
}
console.log(primeCount(arr));