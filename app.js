const hourHand = document.getElementById("hour")
const minHand = document.getElementById("min")
const secHand = document.getElementById("sec")
let x=0
setInterval(()=>{
    const date = new Date();
    let hourDate = date.getHours()
    let minDate = date.getMinutes()
    let secDate = date.getSeconds()

    

    let hourMove = (30*hourDate)+(minDate/2)
    let minMove = (6*minDate)+(secDate/10)
    let secMove = 6*secDate

    hourHand.style.transform = `rotate(${hourMove}deg)`
    minHand.style.transform = `rotate(${minMove}deg)`
    secHand.style.transform = `rotate(${secMove}deg)`
},1000)
