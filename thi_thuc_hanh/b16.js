//bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không
let a = [
    [1, 4],
    [6, 12],
    [10, 14]
]
function oddNumber(arr) {
    result = "Ma trận không tồn tại số lẻ";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (a[i][j] % 2 != 0) {
                result = "Ma trận tồn tại số lẻ"
            }
        }
    }
    return result;
}
document.write(oddNumber(a));