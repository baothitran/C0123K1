class Product {
    constructor(productid, image, name, quantity, weight, price) {
        this.productid = productid;
        this.image = image
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.weight = weight;
    }
}

var checked_list = [];

var products = [];

const products_tb = 'products_tb';
function init() {
    if (localStorage.getItem(products_tb) == null) {
        products = [
            new Product(1, "https://www.tofucute.com/images/10NL115-53_kitkat_bakable_custard_pudding_large.jpg", "Kit Kat Baked Custard Pudding", 12, 11.6, 4),
            new Product(2, "https://www.tofucute.com/images/10NL115-57_kitkat_strawberry_mochi_large.jpg", "Kit Kat Strawberry Daifuku Mochi", 25, 9.9, 3),
            new Product(3, "https://www.tofucute.com/images/10NL110-67_kitkat_setof2_strawberry_milk_large.jpg", "Kit Kat Strawberry Milk", 10, 9.9, 3),
            new Product(4, "https://www.tofucute.com/images/10NL110-78_kitkat_banana_caramel_2022update_large.jpg", "Kit Kat Banana Caramel", 19, 9.9, 3),
            new Product(5, "https://www.tofucute.com/images/10NL115-76_kit_kat_saveblueocean_large.jpg", "Kit Kat Save the Blue Ocean", 22, 11.6, 5),
        ];
        localStorage.setItem(products_tb, JSON.stringify(products));
    }
    else {
        products = JSON.parse(localStorage.getItem(products_tb));
    }
}
function renderTable() {
    let tbProduct = '';
    products.forEach(function (product) {
        tbProduct += 
        `<tr>
            <td><input class='check-box' id="checkbox_${product.productid}" name='checkbox_${product.productid}' type="checkbox" onchange='selectProducts(${product.productid})'></td>
            <td id='img_${product.productid}'  class="product-image-right"><img src="${product.image}" alt="" width="70"
            </td>
            <td id='name_${product.productid}'>${product.name}</td>
            <td id='quantity_${product.productid}'>${product.quantity}</td>
            <td id='weight_${product.productid}'>${product.weight} g</td>
            <td id='price_${product.productid}'>$ ${product.price}.00</td>
            <td>
            <i class="fa-solid fa-pen-to-square" onclick="handleEditItem(${product.productid})"></i>
            </td>
        </tr>`
    })
    document.querySelector('.table>tbody').innerHTML = tbProduct;
}


function renderSearchList(productIdArray) {
    let tbSearchResult = '';
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < productIdArray.length; j++) {
            if (productIdArray[j] === products[i].id) {
                tbSearchResult += `<tr>
                    <td><input class='check-box' id="checkbox_${products[i].productid}" name='checkbox_${products[i].productid}' type="checkbox" onchange='selectProducts(${product.productid})'></td>
                    <td id='img_${products[i].productid}'  class="product-image-right"><img src="${products[i].image}" alt="" width="70"
                    </td>
                    <td id='name_${products[i].productid}'>${products[i].name}</td>
                    <td id='quantity_${products[i].productid}'>${products[i].quantity}</td>
                    <td id='weight_${products[i].productid}'>${products[i].weight} g</td>
                    <td id='price_${products[i].productid}'>$ ${products[i].price}.00</td>
                    <td>
                    <i class="fa-solid fa-pen-to-square" onclick="handleEditItem(${products[i].productid})"></i>
                    </td>
                </tr>`
            }
        }
    }
    document.querySelector('.table>tbody').innerHTML = tbSearchResult;
}

function searchByName() {
    let searchWord = document.getElementById('search').value;
    searchWord = searchWord.trim().toLowerCase();
    let resultSearch = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchWord)) {
            resultSearch.push(products[i].id);
        }
    }
    if (searchWord == null || searchWord == '') {
        renderTable();
        return;
    } else {
        renderSearchList(resultSearch);
        document.getElementById('search').value = '';
    }

}

function getMaxId() {
    let max = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id > max) {
            max = products[i].id;
        }
    }
    return max;
}

function selectProducts(productId) {
    if (checked_list.includes(productId)) {
        checked_list = checked_list.filter(function (id) {
            return id != productId;
        })
    }
    else {
        checked_list.push(productId);
    }
    document.querySelector('#selectAllProducts').checked = false;

    let n = checked_list.length;
    if (n === products.length) {
        document.querySelector('#selectAllProducts').checked = true;
        selectAllProducts();
    }

    console.log(checked_list);
}

function selectAllProducts() {
    if (document.querySelector('#selectAllProducts').checked) {
        checked_list = [];
        for (let i = 0; i < products.length; i++) {
            checked_list.push(products[i].productid);
            document.getElementById(`checkbox_${products[i].productid}`).checked = true;
        }
    }
    else {
        for (let i = 0; i < products.length; i++) {
            checked_list = [];
            document.getElementById(`checkbox_${products[i].productid}`).checked = false;
        }
    }
    console.log(checked_list);
}

// function add() {
//     let image = document.getElementById("productid").value;
//     let name = document.getElementById("name").value;
//     let price = document.getElementById("price").value;
//     let quantity = document.getElementById("quantity").value;
//     let weight = document.getElementById("weight").value;

//     if (name == "" || price == "" || quantity == "" || image == "" || weight == "") {
//         alert("Thông tin không hợp lệ vui lòng nhập lại")
//     } else {
//         let maxId = productMaxId(products) + 1;
//         let product = new Product(maxId, name, price, quantity, weight);

//         products.push(product);
//         drawProduct();
//     }


// }
function add() {
    let name = document.getElementById('name').value;
    if (isEmpty(name)) {
        alert('Please enter information');
        return;
    }
    let productid = getMaxId() + 1;
    let image = document.getElementById('image').value;
    if (isEmpty(image)) {
        alert('Please enter information');
        return;
    }
    let quantity = document.getElementById('quantity').value;
    if (isEmpty(quantity)) {
        alert('Please enter information');
        return;
    }
    let weight = document.getElementById('weight').value;
    if (isEmpty(weight)) {
        alert('Please enter information');
        return;
    }
    let price = document.getElementById('price').value;
    if (isEmpty(price)) {
        alert('Please enter information');
        return;
    }
    products.push(new Product(productid, image, name, quantity, weight, price));

    renderTable();
    localStorage.setItem(products_tb, JSON.stringify(products))
    resetAddForm();
}

function isEmpty(value) {
    return value == null || value.trim() == '';
}

function remove() {
    if (checked_list.length == 0) {
        alert('Please choose one to remove');
    }
    else {
        let confirmed = confirm('Are your sure to delete this?');
        if (confirmed) {
            for (let id of checked_list) {
                products = products.filter(function (product) {
                    return product.id != id;
                })
                localStorage.setItem(products_db, JSON.stringify(products));
                renderTable();
                checked_list = [];
                document.querySelector('#selectAllProducts').checked = false;
            }
        } else {
            document.querySelectorAll('.check-box').checked = false;
        }
    }
}

function changeImage() {
    let imageUrl = document.querySelector('#image').value;
    if (imageUrl != null && imageUrl != "") {
        document.querySelector('#reviewImage').src = imageUrl;
    }
    else {
        document.querySelector('#reviewImage').src = "https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png"
    }
}

// let products = [];
// initData();
// drawProduct();


function handleEditItem(id) {
    let product = findProductById(id);


    document.getElementById("name").value = product.name();
    document.getElementById("price").value = product.price();
    document.getElementById("quantity").value = product.quantity();
    document.getElementById("weight").value = product.weight();
    document.getElementById("productUpdate").value = productid;

    displayHiddenFrmAddUpdate('update');

}


function handleUpdate() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let weight = document.getElementById("weight").value;
    let idProductUpdate = document.getElementById("productUpdate").value;


    if (name == "" || price == "" || quantity == "" || weight == "") {
        alert("Thông tin không hợp lệ vui lòng nhập lại")
    } else {
        let p = new Product();
        p.setName(name);
        p.setPrice(price);
        p.setQuantity(quantity);
        p.setWeight(weight)
        updateProductById(idProductUpdate, p);
        drawProduct();
    }

    displayHiddenFrmAddUpdate('add');


}

function updateProductById(idProduct, product) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].getId() == idProduct) {
            products[i].setName(product.getName());
            products[i].setPrice(product.getPrice());
            products[i].setQuantity(product.getQuantity());
            products[i].setWeight(product.getWeight());

        }
    }
}
function resetForm() {
    document.getElementById("productid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("image").value = "";
    document.getElementById("weight").value = "";
}

function resetAddform() {
    resetForm();
    displayHiddenFrmAddUpdate('add')

}

function displayHiddenFrmAddUpdate(showing) {
    if (showing == 'add') {
        document.getElementById("btn-add").style.display = "block";
        document.getElementById("btn-update").style.display = "none";
        document.getElementById("btn-clear").style.display = "none";
    } else {
        document.getElementById("btn-add").style.display = "none";
        document.getElementById("btn-update").style.display = "block";
        document.getElementById("btn-clear").style.display = "block";
    }
}

function start() {
    init();
    renderTable();
    renderSearchList();
}
start();

// function Product(productid, image, name, quantity, weight, price) {
//     this.productid = productid;
//     this.image = image
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.weight = weight;

//     this.getQuantity = function () {
//         return this.quantity;
//     }
//     this.setQuantity = function (quantity) {
//         this.quantity = quantity;
//     }
//     this.getId = function () {
//         return this.productid;
//     }
//     this.setId = function (productid) {
//         this.productid = productid;
//     }
//     this.getName = function () {
//         return this.name;
//     }
//     this.setName = function (name) {
//         this.name = name;
//     }
//     this.getPrice = function () {
//         return this.price;
//     }
//     this.setPrice = function (price) {
//         this.price = price;
//     }
//     this.getImage = function () {
//         return this.image;
//     }
//     this.setImage = function (image) {
//         this.image = image;
//     }
//     this.getWeight = function () {
//         return this.weight;
//     }
//     this.setWeight = function (weight) {
//         this.weight = weight;
//     }
// }

// function initData() {
//     let p1 = new Product(1, "https://www.tofucute.com/images/10NL115-53_kitkat_bakable_custard_pudding_large.jpg", "Kit Kat Baked Custard Pudding", 12, 11.6, 4);
//     let p2 = new Product(2, "https://www.tofucute.com/images/10NL115-57_kitkat_strawberry_mochi_large.jpg", "Kit Kat Strawberry Daifuku Mochi", 25, 9.9, 3);
//     let p3 = new Product(3, "https://www.tofucute.com/images/10NL110-67_kitkat_setof2_strawberry_milk_large.jpg", "Kit Kat Strawberry Milk", 10, 9.9, 3);
//     let p4 = new Product(4, "https://www.tofucute.com/images/10NL110-78_kitkat_banana_caramel_2022update_large.jpg", "Kit Kat Banana Caramel", 19, 9.9, 3);
//     let p5 = new Product(5, "https://www.tofucute.com/images/10NL115-76_kit_kat_saveblueocean_large.jpg", "Kit Kat Save the Blue Ocean", 22, 11.6, 5);

//     products = [p1, p2, p3, p4, p5];
// }
// function drawProduct() {
//     let strProducts = products.map((product) => {
//         return `
//         <tr>
//             <td><input class='check-box' id="checkbox_${product.productid}" name='checkbox_${product.productid}' type="checkbox" onchange='selectProducts(${product.productid})'></td>
//             <td id='img_${product.productid}'  class="product-image-right"><img src="${product.image}" alt="" width="70"
//             </td>
//             <td id='name_${product.productid}'>${product.name}</td>
//             <td id='quantity_${product.productid}'>${product.quantity}</td>
//             <td id='weight_${product.productid}'>${product.weight} g</td>
//             <td id='price_${product.productid}'>$ ${product.price}.00</td>
//             <td>
//             <i class="fa-solid fa-pen-to-square" onclick="handleEditItem(${product.productid})"></i>
//             </td>
//         </tr>
//         `
//     });
//     document.getElementById("tbProducts").innerHTML = strProducts.join("");
// }

// function drawProductsFilter(productsFilter) {
//     let strProducts = productsFilter.map((product) => {
//         return `
//         <tr>
//             <td><input class='check-box' id="checkbox_${product.productid}" name='checkbox_${product.productid}' type="checkbox" onchange='selectProducts(${product.productid})'></td>
//             <td id='img_${product.productid}'  class="product-image-right"><img src="${product.image}" alt="" width="70"
//             </td>
//             <td id='name_${product.productid}'>${product.name}</td>
//             <td id='quantity_${product.productid}'>${product.quantity}</td>
//             <td id='weight_${product.productid}'>${product.weight} g</td>
//             <td id='price_${product.productid}'>$ ${product.price}.00</td>
//             <td>
//             <i class="fa-solid fa-pen-to-square" onclick="handleEditItem(${product.productid})"></i>
//             </td>
//         </tr>
//         `
//     });
//     document.getElementById("tbProducts").innerHTML = strProducts.join("");
// }