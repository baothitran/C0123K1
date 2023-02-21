let matrix = [
    [3,1,5,4],
    [2,7,1,8],
    [3,5,1,6],
    [1,2,1,2]
]

// let sum = 0;
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//             if(i==j || i+j == matrix[i].length-1){
//                     sum = sum + matrix[i][j];
//             }
//     }
//     console.log(sum);
// }
// bài 0
// let sum = 0;
// for (let i = 0; i< matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j]%2 == 0) {
//             sum = sum + matrix[i][j] ;
//             break;
//         }
//     }
// }
// console.log(`Tong cua so chan la ${sum}`);

// bài 01
// let count = 0
// for (let i = 0; i<matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if( matrix[i][j]%2 !== 0) {
//             count += 1 
//         }
//     }
// }
// console.log(`Có ${count} số lẻ trong ma trận`);

// bài 02
// let position = 0
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j<matrix.length; j++)
// }

// bài 2: tính tổng tam giác trên bên phải
// let sum = 0;
// for (let i = 0; i< matrix.length; i++) {
//     for (let j = i; j < matrix[i].length; j++) {
//         sum += matrix[i][j]
//     }
// }
// console.log(`${sum}`);

// bài 1
let sum1 = 0
for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length - i; j++) {
        sum1 += matrix[i][j]
    }
}
console.log(`${sum1}`);

// bài 03
// let sumPrime = 0;
//   for(let i=0;i<matrix.length;i++){
//      for(let j=0;j<matrix[i].length;j++){
//         let prime = true;
//         if(matrix[i][j]<1){
//             prime = false;
//         }else{
//             for(let z=1;z<matrix[i][j]-1;z++){
//                 if(matrix[i][j]%2==0){
//                     prime = false;
//                     break;
//                 }
//             }
//         }
//         if(prime==true){
//             sumPrime += matrix[i][j];
//         }
//      }
//   }
// console.log(`Tong cac so nguyen to: ${sumPrime}`);