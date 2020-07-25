function temperatureInF(temp, unit){

    //if my temp is in C
    if(unit === 'C'){
        //convert to F
        temp = temp*9/5 + 32;
    }


    //round and return
    temp = Math.round(temp)


    //return a string with temp converted to fahrenheit (rounded) and F
    return `${temp}F`
}



function makePersonObject(myId, myName, myEmail) {

    const myObject = {
        id: myId,
        name: myName,
        email: myEmail
    }

    //return an object with id name and email properties
    return myObject

}

const inventory = require('./data')

function getCarInfoByIndex(inventory, index) {


    let car = inventory[index]

    let model = car.car_model;

    let make = car.car_make;

    return 'This is a ' + make + " " + model 
    //inventory is an array of objects
        //each object has a car_make and car_model property
    //index is a number representing the index of a car in the inventory array

    //return a string with the make and model
  }


  function getLastCarInfo(inventoryArr) {
    //inventoryArr is an array of objects

    return getCarInfoByIndex(inventoryArr, inventoryArr.length-1);



  }


  function getModelYears(inventoryArr) {

    let years = [];

    for (let i=0; i<inventoryArr.length; i++){
        years.push(inventoryArr[i].car_year)

    }


    //   return an array containing all car_years
    return years

  }


//   function getCarInfoById(cars, id) {

//     let car = cars[id-1]

//     let model = car.car_model;

//     let make = car.car_make;

//     return 'This is a ' + make + " " + model 
//     //return a string this is a car_make car_model
//   }


function getCarInfoById(cars, id) {

    let car = {};

    for(let i=0; i<cars.length; i++){
        //if the current car's id is the same as the id passed into the function, assign it to the car variable


        if(cars[i].id === id){
            
            car = cars[i]
        } 



    }

    let model = car.car_model;

    let make = car.car_make;

    return 'This is a ' + make + " " + model 
    //return a string this is a car_make car_model
  }



  function getOlderCars(cars, maxYear) {

    let oldCars = [];

    for(let i=0; i<cars.length; i++){

        if(cars[i].car_year <= maxYear){
            oldCars.push(cars[i])

        }
    }


    return oldCars
      //return an array with cars whose year is at <= maxYear in same order
  }


















