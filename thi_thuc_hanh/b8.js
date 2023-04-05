// bài 8 : Đếm số dương chia hết cho 7 trong mảng
let x = [1, 7, 14, -8, -5, 10, 21];
function countPositiveMode7(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 7 == 0 && numbers[i] > 0) {
            count++;
        }
    }
    return count;
}
document.write(`${countPositiveMode7(x)}`);