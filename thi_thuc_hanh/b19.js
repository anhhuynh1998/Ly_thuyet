//Bài 19: Tìm số chẵn lớn nhất trong ma trận
let a = [
    [2, 4, 1],
    [6, 15, 24],
    [12, 24, 36]
];
let max = 0;
function maxEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 == 0 && arr[i][j] > max) {
                max = arr[i][j]
            }
        }
    }
    return max;

}
document.write(maxEven(a));