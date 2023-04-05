// bài 14 :Kiểm tra ma trận 2 chiều có toàn dương hay không
let a = Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = Array(5);
    for (j = 0; j < a[i].length; j++) {
        a[i][j] = Math.floor((Math.random() * 100) + Math.random() * -10);
    }
}
console.log(a);
function checkPostive(arr) {
    let check = true;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if ((a[i][j]) < 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}
document.write(checkPostive(a));