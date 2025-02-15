// Code your solution in this file!
let headQuater = 42;

function distanceFromHqInBlocks(location){

    if(location < headQuater){
       return headQuater - location;
       }else{
         return location - headQuater;
    }
}


function distanceFromHqInFeet(location){
    if (location > headQuater){
        return(location - headQuater)*264;
    }else {
        return(headQuater-location)*264;
    }
}

const distanceTravelledInFeet = (start, end) => Math.abs(end - start) * 264;

const calculatesFarePrice = (start, end) => {

    let dist = distanceTravelledInFeet(start, end);
    if(dist < 400){
        return 0;
    }else if(dist >= 400 && dist <= 2000 ){
        return (dist - 400) * 2/100;
    }else if( dist > 2000 && dist < 2500){
        return 25;
    }else {
        return "cannot travel that far";
    }
};
