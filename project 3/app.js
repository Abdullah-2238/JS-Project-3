let counter = 0;

document.getElementById("decreaseBtn").onclick=function(){
    --counter;
    document.getElementById("counterlabel").innerHTML = counter;

}

document.getElementById("resetBtn").onclick=function(){
    counter=0;
    document.getElementById("counterlabel").innerHTML = counter;
}

document.getElementById("increaseBtn").onclick=function(){
    ++counter;
    document.getElementById("counterlabel").innerHTML = counter;
    
}