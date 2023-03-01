function FanElectric(id, color, company){
    this.id = id;
    this.color = color;
    this.company = company;
    this.speed = 1;
    this.status = false;

    this.setStatus = function (status){
        this.status = status;
    }


}
function Store(name, address){
    this.name = name;
    this.address = address;

    this.fans = [];
    this.setFans = function (fans){
        this.fans = fans;
    }
    this.showFans = function(){
        for(let i=0;i<this.fans.length;i++){
            console.log(`Quạt ${this.fans[i].id} đang ${this.fans[i].status ? 'bật' : 'tắt'}`);
        }
    }

    this.startFans = function(){
        for(let i=0;i<this.fans.length;i++){
            this.fans[i].setStatus(true);
        }
    }
}

let storeHue = new Store("Bao Thi Electric Hue", "29 NTP");
let f1 = new FanElectric(1, "blue", "SENKO");
let f2 = new FanElectric(2, "yellow", "ASIA");
let f3 = new FanElectric(3, "blue", "SANYO");
let f4 = new FanElectric(4, "blue", "SENKO");
let fansHue = [f1, f2, f3, f4];

storeHue.setFans(fansHue);

storeHue.showFans();

storeHue.startFans();

storeHue.showFans();


