// bài 15 :Kiểm tra một cột ma trận có giảm dần hay không
let a = [
    [5, 2, 3, 1, 4],
    [6, 5, 4, 3, 2],
    [9, 8, 2, 13, 14]
];
console.log(a);
function checkPostive(arr, column) {
    for (let i = 0; i < arr.legth - 1; i++) {
        if (arr[i][column] <= arr[i + 1][column]) {
            return false;
        }
    }
    return true;
}

console.log(checkPostive(a, 4));