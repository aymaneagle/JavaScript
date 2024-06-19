//basic class

class toyotaCar {
    start() {
        console.log("start");
    }

    stop () {
        console.log ("stop");
    }

    setBrand (brand) {
        this.brandName = brand;
    }
    setSeries (series) {
        this.series = series;
    }
}


let fortuner = new toyotaCar ();
fortuner.setBrand ("fortuner");
fortuner.setSeries ("Joss");
let lexus = new toyotaCar ();
lexus.setSeries("beshi joss");