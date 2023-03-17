const Hq = 42

let distanceFromHqInBlocks = function(n){
    if (n > 42){
        return (Hq - n) * (-1); 
    } else {
        return Hq - n;
    } 
}

let distanceFromHqInFeet = function(n){
    return distanceFromHqInBlocks(n) * 264;
}

let distanceTravelledInFeet = function(start, destination) {
    if (start >= destination) {
        return (start-destination) * 264;
    } else {
        return (destination-start) * 264;
    }
}
let calculatesFarePrice = function(start, destination) {
    if ((Math.abs(start-destination)*264) < 400) {
        return 0
    } else  if ((Math.abs(start-destination)*264) >= 400 && (Math.abs(start-destination)*264)< 2000) {
        return ((Math.abs(start-destination)*264) - 400) * .02;
    } else if ((Math.abs(start-destination)*264) > 2000 && (Math.abs(start-destination)*264)< 2500) {
        return 25;
    } else {
        return `cannot travel that far`;
    }

}