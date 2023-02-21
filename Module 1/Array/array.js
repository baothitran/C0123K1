let matrix = [
    [3,1,5,4]
    [2,7,1,8]
    [3,5,1,6]
    [1,2,1,2]
]
for(let i = 0; i <matrix.length; i++) {
    let str = "";
    for (let j = 0; j < matrix[i].length; j++) {
        str = str + matrix[i][j] + " ";
    }
    console.log(str);
}
