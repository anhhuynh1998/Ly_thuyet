// bài 3 : Đưa các số chia hết cho 3 về đầu mảng
function divisible(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%3 == 0) {
            let temp = arr[i];
            for (let j = i; j > 0 ; j--) {
                arr[j] = arr[j-1]
            }
            arr[0] = temp;
        }
    }
    console.log(arr);
}
divisible([1,3,-9,2])