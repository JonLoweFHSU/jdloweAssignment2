function spaceTravel(planet, spaceShip){
    let traveltime;
    switch (planet){
        case "mars":
        travelTime = 210;
        break;
        case "venus":
            travelTime = 130;
        break;
        case "jupiter":
            travelTime = 640;
        break;
        default:
            return "sorry, we don't offer trips to that planet!"
    }

    if(spaceShip === "Speedster"){
        travelTime /=2
    } else if(spaceship === "economy"){
        travelTime *=1.5
    }
    return 'your trip to ' ${planet} 'on the' ${spaceShip} 'spaceship will be' ${travelTime}
}




