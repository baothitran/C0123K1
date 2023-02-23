
let arr1 = [5,1,7,9,4,2]
//bài 2
// function printEven(arr) {
//     for(i=0; i < arr.length; i++) {
//         if(arr[i]%2 == 0) {
//             console.log(arr[i] + " là số chẵn");
//         }
//     }
// }
// printEven(arr1)

//bài 1
// function sumArr(arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]      
//     }
//     return sum
// }
// let sum1 = sumArr(arr1)
// console.log(sum1);

//bài 3
// Hàm hiển thị các số nguyên tố của mảng;
function displayPrime(arr) {
    let display = ""
    for(i=0; i<arr.length; i++) {
        if(arr[i] < 1) {}
        else {
            let count = 0
            for (let j=1; j<=arr[i]; j++) {
                if (arr[i] %j == 0) {
                    count += 1
                }
            }
            if (count == 2) {
                display += `${arr[i]} \n`
            } else {}
        }
    }
    return display
}
let prime = displayPrime(arr1)
console.log(prime);
//bài 4
// function findMax(arr) {
//     let max = arr[0]
//     for(i=1; i<arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// let max1 = findMax(arr1)
// console.log(max1);
// bài 5
// function findMin(arr) {
//     let min = arr[0]
//     for(let i=1; i<arr.length; i++) {
//         if(arr[i]< min) {
//             min = arr[i]
//         }
//     }
//     return min
// }
// let min1 = findMin(arr1)
// console.log(min1);

//bài 6
// let arr2 = [8,12,3]
// function linkArr(arr0,arr) {
//     let link = arr0.concat(arr)
//     return link
// }
// let link1 = linkArr(arr1,arr2)
// console.log(link1);
//bài 7
// function reverseArr(arr) {
//     for(i=0; i<arr.length/2; i++) {
//         let temp = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i]= temp
//     }
//     return arr
// }
// let reverse1 = reverseArr(arr1)
// console.log(reverse1);
//bài 8
// function joinArr(arr) {
//     let str =""
//     str = arr.join(" - ")
//     return str
// }
// let join1= joinArr(arr1)
// console.log(join1);
//bài 9
// function displayPosition(num,arr) {
//     let position = 0
//     let count = 0
//     let display = ""
//     for (i=0; i<arr.length; i++) {
//         if(arr[i] == num) {
//             position = i
//             display += `${num} nằm ở vị trí thứ ${position} \n`
//             count += 1
//         }
//     }
//     if(count>0) {
//         return display
//     } else {
//         return "-1"
//     }
// }
// let display1 = displayPosition(9,arr1)
// console.log(display1);
//bài 10
// function pushArr(num,arr) {
//     arr.push(num)
//     return arr
// }
// let push1 = pushArr(11,arr1)
// console.log(push1);