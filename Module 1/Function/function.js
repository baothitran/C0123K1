let numbers1 = [4,6,1];

// function addNumberToArray(numbers){
//     let sum = 0;
//     let newNumbers = [];
//     for(let i = 0;i<numbers.length;i++){
//         newNumbers.push(numbers[i]);
//         sum+= numbers[i];
//     }
//     newNumbers.push(sum);
//     return newNumbers;
// }

function addNumberToArray2(numbers){
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        sum+= numbers[i];
    }
    numbers.push(sum);
}
addNumberToArray2(numbers1);
console.log(numbers1);