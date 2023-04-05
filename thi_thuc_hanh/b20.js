//Bài 20: Liệt kê các dòng có tổng lớn nhất
let a = [
    [2, 4, 6],
    [8, 10, 12],
    [20, 15, 10]
];
function maxRow(arr) {
    let max = 0;
    let total = 0;
    let index;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
        if (total > max) {
            max = total;
            index = i;
        }
        total = 0;
    }
    result.push(arr[index]);
    return result;
}
document.write(maxRow(a));