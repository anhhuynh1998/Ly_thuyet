//bài 4 : Đảo ngược mảng ban đầu    
function Reverse(arr) {
    for (let i = 0; i < (arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
Reverse([-1,-2,-3,-5])