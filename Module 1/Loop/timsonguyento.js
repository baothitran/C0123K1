let n = 8

if (n<2) {
    console.log("n không phải là số nguyên tố");
}
else {
    for (i=2; i < n-1; i++) {
        if (n%i == 0) {
            console.log("n không phải là số nguyên tố");
        }
        else {
            console.log("n là số nguyên tố");
        }
    }
}