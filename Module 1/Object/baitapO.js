function Product(id, name, company, price) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.price = price;
    this.status = false;

    this.setStatus = function (status) {
        this.status = status
    }

}
function Store(storename, address) {
    this.storename = storename;
    this.address = address;
    this.phones = [];
    this.setPhones = function (phones) {
        this.phones = phones
    }
    this.showPhones = function () {
        for (let i = 0; i < this.phones.length; i++) {
            this.phones[i].setStatus(true)
        }

        for (let i = 0; i < this.phones.length; i++) {
            console.log(`Điện thoại ${this.phones[i].id},${this.phones[i].name},${this.phones[i].company}, có giá là ${this.phones[i].price} đang ${this.phones[i].status ? "bật" : "tắt"}`);
        }
    }
    this.sumPhones = function () {
        let total = 0;
        for (let i = 0; i < this.phones.length; i++) {
            total += this.phones[i].price;
        }
        console.log(`Tổng giá trị các sản phẩm là ${total}`);
    }
    this.splicePhones = function () {
        for (let i = 0; i < productApple.length; i++) {
            if (productApple[i].id == 3) {
        
                productApple.splice(i, 1)
            }
        }
        console.log(productApple);
    
        
    }
}
let storeHue = new Store("Apple Store","27 NTP")
let p1 = new Product(1, "Iphone 11", "Apple", 10000)
let p2 = new Product(2, "Iphone 12", "Apple", 15000)
let p3 = new Product(3, "Iphone 13", "Apple", 20000)
let p4 = new Product(4, "Iphone 14", "Apple", 25000)
let p5 = new Product(5, "Iphone 15", "Apple", 30000)
let productApple = [p1, p2, p3, p4, p5];
storeHue.setPhones(productApple);
storeHue.showPhones()
storeHue.sumPhones()
storeHue.splicePhones()






