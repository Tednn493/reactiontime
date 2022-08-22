const playButton=document.querySelector("#play")
const stage1=document.querySelector("#stage1")
const stage2=document.querySelector("#stage2")
const stage3=document.querySelector("#stage3")
const correct=document.querySelector("#correct")
const incorrect=document.querySelector("#incorrect")
const reactTime=document.querySelector("#reactTime")
const gameWindow=document.querySelector(".gameWindow")
const again=document.querySelector("#again")

function difference(min){
    const newtime= new Date()
    return newtime-min
}



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setEventListener(){
    gameWindow.addEventListener("click", e=>{
        incorrect.classList.toggle("hidden")
        gameWindow.style.cssText = "background-color: red"
        return
    })
}

function gotoStage2(){
    stage1.classList.toggle("hidden")
    stage2.classList.toggle("hidden")
    setTimeout(setEventListener(),10000)
    console.log("Hello")
}




playButton.addEventListener("click", e=> gotoStage2())


function startgame(){
    stage2.classList.toggle("hidden")
    stage3.classList.toggle("hidden")
    gameWindow.style.cssText = "background-color: #00FF00"
    const currentTime= new Date()   
}
 
  
const rndInt = randomIntFromInterval(8000, 15000)



console.log(currentTime.getMilliseconds())