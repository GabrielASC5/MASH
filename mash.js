function mash(){
    if(process.argv[2] && process.argv[3] && process.argv[4]){
    var destiny = "You will live in a " + getHome() + ", drive a " + getCar() + " and you will have " + getChildrenCount() + " kids!";
    return destiny;
}else{
    return "You haven't added all of the things you might have wanted. Quit slacking."
}

}
console.log(mash());

function getChildrenCount(){
    let i = Math.random();
    if(i < 0.5){
        return process.argv[3];
    }else{
        return Math.floor(Math.random() * 100);    
    }    
}

function getHome(){
    const livingSpace = ["Mansion", "Apartment", "Shack", "House", process.argv[2]];
    let chance = Math.floor(Math.random() * livingSpace.length);
    return livingSpace[chance];
}

function getCar(){
    const vehicle = ["lambo", "box", process.argv[4]]
    let chance = Math.floor(Math.random() * vehicle.length)
    return vehicle[chance];
}
