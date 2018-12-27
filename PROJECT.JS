function createCar(name) {
    this.name = name;
    this.fuelCapacity = 10;
    this.capacityUnit = 'litres';
    this.direction = null;
    this.currentGearPosition = 0;
    this.kilometersRunned = 0;
    this.mileage = 0;

    this.turnToDirection = function(direction) {
    this.direction = direction;
    this.rearCamera = null ;
    }

    this.getDirection = function() {
    console.log(this.name + " is in direction "+ this.direction);
    return this.direction;
    }

    this.changeGear = function(gear) {
        switch (gear) {
            case 0: {
            break;
            }
            case 1 : {
            this.kilometersRunned = this.kilometersRunned + 100;
            break;
            }

            case 2 : {
            this.kilometersRunned = this.kilometersRunned + 200;
            break;
            }

            case 3 : {
            this.kilometersRunned = this.kilometersRunned + 300;
            break;
            }

            case 4 : {
            this.kilometersRunned = this.kilometersRunned + 400;
            break;
            }
        }
        updateFuelCapacity();
    }

function updateFuelCapacity() {
}
    this.fillFuel = function(litres) {
    this.fuelCapacity = this.fuelCapacity + litres;
    }

    this.getFuelCapacity = function() {
    console.log(this.name + ' fuel capacity is '+ this.fuelCapacity);
    console.log(this.name + ' total kilometers runned is '+ this.kilometersRunned);
    }
}

var a=[], myCar1 = new createCar('SUZUKI');
var b=[], myCar2 = new createCar('BMW');
var c=[], myCar3 = new createCar('TATA');

a.push(myCar1);
b.push(myCar2);
c.push(myCar3);

myCar1.rearcamera = false;
console.log("rearcamera updated to:"+" "+myCar1.rearcamera);

myCar1.fillFuel(20);
myCar1.changeGear(1);
myCar1.changeGear(2);
myCar1.changeGear(3);
myCar1.changeGear(4);
myCar1.changeGear(0);
myCar1.turnToDirection('left');
myCar1.getDirection();
myCar1.getFuelCapacity();
