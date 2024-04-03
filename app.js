let celciusInput=document.querySelector('#celcius > input')
let FahrenheitInput=document.querySelector('#Fahrenheit > input')
let KelvinInput=document.querySelector('#Kelvin > input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input',function(){
    let ctemp=parseFloat(celciusInput.value)
    let ftemp=(ctemp*(9/5)) + 32
    let ktemp=ctemp + 273.15

    FahrenheitInput.value=roundNumber(ftemp)
    KelvinInput.value=roundNumber(ktemp)
})

FahrenheitInput.addEventListener('input',function(){
    let ftemp=parseFloat(FahrenheitInput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9) +273.15

    celciusInput.value=roundNumber(ctemp)
    KelvinInput.value=roundNumber(ktemp)
})

KelvinInput.addEventListener('input',function(){
    let ktemp=parseFloat(KelvinInput.value)
    let ctemp= ktemp - 273.15
    let ftemp= (ktemp -273.15) *(9/5)+32

    celciusInput.value=roundNumber(ctemp)
    FahrenheitInput.value=roundNumber(ftemp)
})

btn.addEventListener('click',() =>{
    celciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""
})