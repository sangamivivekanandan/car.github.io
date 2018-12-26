function createCar(type,model,color,brand,fueltype,yearofmanufacture,enginepower,geartype,dateoflaunch,mileage,KMrunned,fuelcapacity){
    this.type=type;
    this.model=model; 
    this.color=color;
    this.brand=brand;
    this.fueltype=fueltype;
    this.yearofmanufacture=yearofmanufacture;
    this.enginepower=enginepower;
    this.geartype=geartype;
    this.dateoflaunch=dateoflaunch;
    this.mileage=mileage;
    this.KMrunned=KMrunned;
    this.fuelcapacity=fuelcapacity;
    
}

var a=[],myCar1 = new createCar("suv",500,"red","suzuki","petrol",2018,200,"auto","3-10-2018",5,0,10);
var b=[],myCar2 = new createCar("sedan",150,"black","bmw","diesal",2017,300,"manual","3-10-2017",5,0,10);
var c=[],myCar3 = new createCar("mini",560,"white","tata","petrol",2008,420,"auto","3-10-2008",5,0,10);
    
    a.push(myCar1);
    b.push(myCar2);
    c.push(myCar3);
       
createCar.prototype.rearcamera = false;
createCar.prototype.direction = "left";

console.log(myCar1.rearcamera);
console.log(myCar1.direction);

var d = a.concat(b); 
console.log(d);





















