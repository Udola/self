let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor(){
    let max = 200;
    let min = 50;
    let green = Math.floor(Math.random() * (max - min +1))
    + min;
    let color = "rgba(255, " + green+ ", 100, 1.0)";
    return color;
}

function makeBox() {
    let time = Math.random();
    time = time * 2000;
    setTimeout(function(){

    if(Math.random() >= 0.5){
        document.querySelector("#box").style.borderRadius = "70px";
    }else{
        document.querySelector("#box").style.borderRadius = "0px";
    }
    
    let min = 0;
    let max = window.innerHeight - 280;
    let top = Math.floor(Math.random() * (max -min +1))+min;
    min = 0;
    max = window.innerWidth - 140;

    let dynamicBound;
    if(window.innerWidth > window.innerHeight){
        dynamicBound = window.innerWidth / 8;
    }else{
        dynamicBound = window.innerHeight / 8;
    }
    dynamicBound = dynamicBound + "px";
    document.documentElement.style.setProperty("--bound",dynamicBound);

    let left = Math.floor(Math.random() * (max -min +1))+min;
    
    document.querySelector("#box").style.top = top +"px";
    document.querySelector("#box").style.left = left +"px";

    document.querySelector("#box").style.
    backgroundColor = getRandomColor();

    document.querySelector("#box").style.display = "block";
    createdTime = Date.now ();
    },time);

}
//當尋找 ID box 按下去時，會在CSS執行消失。
document.querySelector("#box").onclick = function () {
    this.style.display = "none";
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.querySelector("#time").innerHTML = reactionTime;
    makeBox();
}
makeBox();
