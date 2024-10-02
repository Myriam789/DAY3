function fillbus(peopleAtbusStops, busSeats)
{ 
    if (!Array.isArray(peopleAtbusStops) || typeof busSeats !== 'number' || busSeats < 0) 
    {
        return -1;
    }
    let currentCapacity = 0;
    for (let i = 0; i < peopleAtbusStops.length; i++)
    { 
        currentCapacity += peopleAtbusStops[i];
        if(currentCapacity >= busSeats) return i;
    } 
    return -1;
}
console.log(fillbus([1, 3, 10, 1],12));
