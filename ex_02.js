function findHousing(housingToFind, housingList) {
let index = 0;

while (index < housingList.lenght)
    if (housingList[index] === houseToFind) {
        return [index, housingList[index]];

   }
   index ++;
 
  }
  
      return null;
   }
   
   
   
//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult([6, "Igloo"])
