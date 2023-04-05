// bài 2 : Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
let x = [2, 4, 1, -8, -5, 10, 21];
function avgPositive(arr) {
    let count = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
            total += arr[i];
        }
    }
    let avg = total / count;
    return avg
}
console.log((`${avgPositive(x)}`));