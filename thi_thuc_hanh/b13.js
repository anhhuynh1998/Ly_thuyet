//bai 13 : Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
function arrInarr(arrayA, arrayB) {
    let isIn = true;
    let count = 0;
    for (var i = 0; i < arrayA.length; i++) {
        for (var j = 0; j < arrayB.length; j++) {
            if (arrayA[i] == arrayB[j]) {
                count++;
                break;
            }
        }
    }
    if (count == arrayA.length) {
        isIn = true;
    } else {
        isIn = false;
    }
    return isIn;
}
let arrA = [1, 2, 3, 1, 2, 4, 5, 2, 1];
let arrB = [4, 3, 2, 1, 5, 2];
console.log(arrInarr(arrA, arrB));