//Bài 18: Tìm số chẵn đầu tiên trong ma trận
let a = [
    [1, 4, 6],
    [1, 3, 6],
    [2, 4, 5]
];
function firstEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 == 0) {
                return a[i][j];
            }
        }
    }
}
document.write(firstEvenNumber(a));