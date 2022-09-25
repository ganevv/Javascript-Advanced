function roadRadar(speed, area) {

    let speedLimit = 0
    let difference = 0
    let status = ''

    switch (area) {
        case "city": speedLimit = 50
            break;
        case "residential": speedLimit = 20
            break;
        case "interstate": speedLimit = 90
            break;
        case "motorway": speedLimit = 130
            break;
    }

    if (speed <= speedLimit && speed > 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        difference = speed - speedLimit
        if (difference <= 20) {
            status = 'speeding'
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city')