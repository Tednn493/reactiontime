const playButton=document.querySelector("#thebutton")
const textbox=document.querySelector("#textbox")
const correct=document.querySelector("#correct")
const incorrect=document.querySelector("#incorrect")
const reactTime=document.querySelector("#reactTime")
const gameWindow=document.querySelector(".gameWindow")
const again=document.querySelector("#again")
let ctime= new Date()
let ntime=new Date()
let rtime= new Date()
let xnum=0
let clicked=false
let tdiff=0
const rndInt = randomIntFromInterval(5000, 10000)
console.log(rndInt)

function hello(){
    if (clicked==true){
        return
    }else{
        textbox.innerHTML="CLICK!"
        gameWindow.style.backgroundColor="green";
        let c2time= new Date()
        gameWindow.addEventListener("click", e=> {
            let n2time= new Date()
            let diff2= n2time-c2time
            let reacttext=("Your reaction time is :"+diff2+" ms")
            textbox.innerHTML=reacttext
            gameWindow.style.backgroundColor="#242424"
            return
        },{ once: true });
    }
}

function startgame(){
    ctime= new Date()
    textbox.innerHTML="Wait for green..."
    gameWindow.addEventListener("click", e=> {
        ntime= new Date()
        let diff= ntime-ctime
        if (rndInt>diff){
            clicked=true
            textbox.innerHTML="You pressed too early"
            gameWindow.style.backgroundColor="red"
        }
    })
    gameWindow.removeEventListener
    setTimeout(hello,rndInt)
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

playButton.addEventListener("click", e=>{
    startgame()
    playButton.classList.add("hidden")
})
