let matrix = [
    [3, 1, 5, 4],
    [2, 7, 1, 8],
    [3, 5, 1, 6],
    [1, 2, 1, 2]
]

// let sum = 0;
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//             if(i==j || i+j == matrix[i].length-1){
//                     sum = sum + matrix[i][j];
//             }
//     }
// }

// bài 0: Tính tổng các số chẵn trong ma trận
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 == 0) {
            sum = sum + matrix[i][j];
        }
    }
}
console.log(sum);

// Bài 01: Đếm các số lẻ trong ma trận
let position = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 != 0) {
            position += 1;
        }
    }
}
console.log(`Có ${position} số lẻ`);

//Bài 02: Tìm vị trí [i][j] của số nguyên tố đầu tiên trong ma trận
let position2 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > 0) {
            for (let k = 1; k <= matrix[i][j]; k++) {
                if (matrix[i][j] % k == 0) {
                    position2 += 1;
                }
                if (position2 == 2) {
                    console.log(`Số ${matrix[i][j]} là số nguyên tố đầu tiên ở vị trí i = ${i} và j = ${j}`);
                    break;
                }
            }
        }
    }
}
//Bài 1: Tính tổng giá trị tam giác trên bên trái
let sum1 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - i; j++) {
        sum1 += matrix[i][j];
    }
}
console.log(`Tổng giá trị tam giác trên bên trái là ${sum1}`);

//Bài 2: Tính tổng giá trị tam giác trên bên phải
let sum2 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
        sum2 += matrix[i][j];
    }
}
console.log(`Tổng giá trị tam giác trên bên phải là ${sum2}`);

//Bài 3: Tính tổng giá trị tam giác dưới bên trái
let sum3 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i+1; j++) {
        sum3 += matrix[i][j];
    }
}
console.log(`Tổng giá trị tam giác dưới bên trái là ${sum3}`);

//Bài 4: Tính tổng giá trị tam giác dưới bên phải
let sum4 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length-1; j >= matrix[i].length -1 - i; j--) {
        sum4 += matrix[i][j];
    }
}
console.log(`Tổng giá trị tam giác dưới bên phải là ${sum4}`);

//Bài 5: Tính tổng các giá trị ở đường viền 
let sum5 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if(i==0 || i == matrix.length -1 || j ==0 || j == matrix[i].length -1){
            sum5 += matrix[i][j];
        }
    }
}
console.log(`Tổng các giá trị ở đường viền là ${sum5}`);