function kiemtra() {
    let thunhap = Number(document.getElementById('thunhap').value);
    let result;
    
    thunhap <= 5? result = "Bậc lương là 1":
        (thunhap <= 10? result = "Bậc lương là 2":
            (thunhap <= 18? result = "Bậc lương là 3:":
                (thunhap <= 32? result = "Bậc lương là 4":
                    (thunhap <= 52? result = "Bậc lương là 5":
                        (thunhap <= 80? result = "Bậc lương là 6": result = "Bậc lương là 7")))))

document.getElementById("result").innerHTML = result
}








        // if (luong <= 5) {
        //     result = "Bac luong la: 1"
        // }
        // else if (luong <= 10) {
        //     result = "Bac luong la: 2"
        //     } 
        //     else if(luong <= 18) {
        //         result = "Bac luong la: 3"
        //         }
        //         else if(luong <= 32) {
        //             result = "Bac luong la: 4"
        //             }
        //             else if(luong <= 52) {
        //                 result = "Bac luong la: 5"
        //                 }
        //                 else if(luong <= 80) {
        //                     result = "Bac luong la: 6"
        //                     }
        //                         else {
        //                             result = "Bac luong la: 7"  
        //                         }

        // document.write(result)
