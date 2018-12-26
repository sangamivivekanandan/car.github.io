var car =[{
    type:"suv",
    model:"500", 
    color:"red",
    brand:"suzuki",
    fueltype:"petrol",
    yearofmanufacture:"2018",
    enginepower:"200",
    geartype:"auto",
    dateoflaunch:"01-03-2018",
    mileage:"20",
    KMrunned:"0",
    gear:"N",
    direction:"center",
    fuelcapacity:"10"
},{
    type:"sedan",
    model:"150", 
    color:"black",
    brand:"bmw",
    fueltype:"diesal",
    yearofmanufacture:"2017",
    enginepower:"300",
    geartype:"manual",
    dateoflaunch:"04-10-2017",
    mileage:"5",
    KMrunned:"0",
    gear:"N",
    direction:"center",
    fuelcapacity:"10"
},{
    type:"mini",
    model:"560", 
    color:"white",
    brand:"tata",
    fueltype:"petrol",
    yearofmanufacture:"2008",
    enginepower:"420",
    geartype:"auto",
    dateoflaunch:"03-10-2008",
    mileage:"20",
    KMrunned:"0",
    gear:"N",
    direction:"center",
    fuelcapacity:"10"
}];


gearChange();
turnleft();
turnright();
gearup1();
gearup2();
gearneutral();
gearchangereverse();

function gearChange() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].gear == "N") {
            car[i].gear = "1";
        }
        else if (car[i].gear == "1") {
            car[i].gear = "2";
        }
        else if (car[i].gear == "2") {
            car[i].gear = "3";
        }
        else if (car[i].gear == "R") {
            car[i].gear = "N";
        }
        console.log(car[i].type + " : " + car[i].gear);
    }
}

function turnright() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].direction == "center"||car[i].direction == "turnleft") {
            car[i].direction = "turnright";
        }
        console.log(car[i].type + " :" + car[i].direction);
    }
}

function turnleft() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].direction == "center"||car[i].direction == "turnright") {
        car[i].direction = "turnleft";
        }
        console.log(car[i].type + " :" + car[i].direction);
    }
} 

function gearup1() {
    car.forEach(function (e) {
        if (e.gear == "1") {
        var a = car.KMrunned + 100;
        }
    });
}
    
function gearup2() {
    car.forEach(function (e) {
        if (e.gear == "2") {
        var b = a + 200;
        }
    });
}
    
function gearneutral() {
    car.forEach(function (e) {
        if (e.gear == "neutral") {
        var c = car.KMrunned;
        }
    });
}
    
function gearchangereverse() {
    car.forEach(function (e) {
        if (e.gear == "reverse") {
        var d = b - 150;
        }
    });
}
 