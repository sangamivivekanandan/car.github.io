var car =[{
    type:"suv",
    model:"500", 
    color:"red",
    brand:"suzuki",
    fueltype:"petrol",
    yearofmanufacture:"2018",
    enginepower:"200",
    geartype:"auto",
    dateoflaunch:"03/01/2018",
    mileage:"20",
    KMrunned:"0",
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
    dateoflaunch:"10/04/2017",
    mileage:"5",
    KMrunned:"0",
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
    dateoflaunch:"10/03/2008",
    mileage:"20",
    KMrunned:"0",
    fuelcapacity:"10"
}];

filterByyear();
countLaunchedDate();
sortByYear();
sortByBrand();
sortByLaunchDate();
countType();
countGearType();
removeMini();

  function filterByyear() {
    for (var i = 0; i < car.length; i++) {
      if (car[i].yearofmanufacture < 2010){
        console.log("Before 2010:"+" "+car[i].type+" "+car[i].yearofmanufacture);
      }
    }
  }

  function countLaunchedDate(){
    var count0 = 0;
    var startdate = 2016;
    var enddate = 2018;
    car.forEach(function(e){
      if (e.yearofmanufacture > startdate && e.yearofmanufacture < enddate){
        count0++;
      }
    });  
    console.log("no.of.cars launched in range:"+" "+count0);
  }

  function sortByYear(){
    for (var i = 0; i < car.length; i++) {
      car.sort(function(a, b){
        var dateA=new Date(a.yearofmanufacture), dateB=new Date(b.yearofmanufacture);
        return dateB-dateA;
      })
      console.log(car[i].type+" "+car[i].model+" "+car[i].yearofmanufacture);
    }
  }
    
  function sortByBrand(){
    for (var i = 0; i < car.length; i++){
      car.sort(function(a, b){
        if(a.type < b.type) { return -1; }
        if(a.type > b.type) { return 1; }
        return 0;
      })
      console.log(car[i].type);
    }
  }
      
  function sortByLaunchDate(){
    for (var i = 0; i < car.length; i++){
      car.sort(function(a, b){
          var dateA=new Date(a.dateoflaunch), dateB=new Date(b.dateoflaunch);
          return dateA-dateB;
        })
        console.log(car[i].type+" "+car[i].dateoflaunch);
      }
  }
  
  function removeMini(){
    for (var i = 0; i < car.length; i++){
      car = car.filter(function( obj ){
      return obj.type !== 'mini';
      });
     console.log(car[i].type);
    }
  }   
  
  function countType(){
    var count = 0;
    car.forEach(function(e){
      if (e.type == "suv"){
       count++;
      }
    });
    console.log("suv" +" "+ count);
    var count1 = 0;
    car.forEach(function(e){
      if (e.type == "sedan"){
       count1++;
      }
    });
    console.log("sedan" +" "+ count1);
    var count2 = 0;
    car.forEach(function(e){
      if (e.type == "mini"){
       count2++;
      }
    });
    console.log("mini" +" "+ count2);
  }

  function countGearType(){
    var count3 = 0;
    car.forEach(function(e){
      if (e.geartype == "auto"){
        count3++;
      }
    });
    console.log("GearType:auto" +" "+ count3);
    var count4 = 0;
    car.forEach(function(e){
      if (e.geartype == "manual"){
        count4++;
      }
    });
    console.log("GearType:manual" +" "+ count4);
  }