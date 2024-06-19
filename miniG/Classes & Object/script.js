//basic class

class toyotaCar {
    constructor(brand, mileage) {
        console.log ("playing with constructor");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop () {
        console.log ("stop");
    }

}


let fortuner = new toyotaCar ("fortuner",10); //fortuner
console.log(fortuner);
let lexus = new toyotaCar (); //undefined
