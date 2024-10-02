functionfillbus(peopleAtbusStops, busSeats) { 
  if (!Array(peopleAtBusStops)// typeof busSeats ! == 'number'// busSeats < 0 {
  return null;
  }
 let currentCapacity = 0;
 
 for (let i = 0; i < peopleAtBusStops.length; i=i+1) { 
 currentCapacity +=peopleAtBusStops [i];
 if(currentCapacity >= busSeats) return i;
    } 
    return null
}
consol.log(fillbus([1, 3, 10, 1],12));
