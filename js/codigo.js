// El modal en el que ingresamos la fecha del countdown lo seteamos para que no se pueda elegir un día anterior al corriente
let todayDate = new Date();
let dd = String(todayDate.getDate()).padStart(2, '0');
let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); 
let yyyy = todayDate.getFullYear();
todayDate = yyyy + '-' + mm + '-' + dd;
let setCountdownDate= document.getElementById('set-countdown-date');
let setCountdowHour=document.getElementById('set-countdown-hour');
setCountdownDate.min=todayDate;
setCountdownDate.value= todayDate;
let buttonSetCountdown =document.getElementById('button-set-countdown');
let setCountdownSection=document.getElementById('set-countdown-section');
let countdownSection=document.getElementById('countdown-section');

let elementTime =["days","hours","minutes", "seconds"];

let resetDate=false;
console.log(resetDate)

buttonSetCountdown.addEventListener( 'click',(evt)=>{
  // Evitamos que se recargue la página al hacer click en el botón
  evt.preventDefault();
  // Si se ingresó una fecha y una hora, guardamos estos valores en una variable para iniciar el countdown
  if (setCountdownDate.value && setCountdowHour.value){
    // Escondemos el modal
    setCountdownSection.style.display='none';
    // Mostramos en pantalla la sección del countdown
    countdownSection.style.display='inherit';
    let countDownDate= new Date(`${setCountdownDate.value}T${setCountdowHour.value}:00`).getTime();
    document.getElementById("main-title").innerHTML=`<span>We're launching</span> <br class="enter"> <span>soon</span>`
    
    // Iniciamos el countdown
    startCountDown (countDownDate)
  } 
})
function startCountDown (date){
    let x = setInterval(()=>{countDown(date)}, 1000);
    let w= setInterval(()=>{
      expired (x)
      if (resetDate){
        clearInterval(x);
        resetDate=false;
        console.log (resetDate)
        clearInterval(w)
      }
    }, 1000);
}

// Esta función calcula el valor que debe aparecer en cada tarjeta y depende de la varible "date", será la fecha que ingresemos a través del modal
function countDown(date) {
    // Get today's date and time
    now = new Date().getTime();
    // Find the distance between now and the count down date
    distance = date - now;
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time=[days,hours, minutes, seconds];
    // Ejecutamos la función que nos completa las cards
    innerCard()
    // Ejecutamos la función que realiza las animaciones 
    animation()
    return time, distance;
};

// Mostramos el tiempo en cada tarjeta
function innerCard(){
  for (let index = 0; index < elementTime.length; index++) {
  document.getElementById (elementTime [index]).innerHTML=time[index];    
  }
  //Add "0" to seconds, minutes and hours when they're less than 10  
  for (let index = 1; index < elementTime.length; index++){
    if (time [index]<10){
    document.getElementById (elementTime [index]).innerHTML="0"+time[index]
    };
  };
};

// Minutes Hours Days Countdown Animation // idea: cuando cambia la hora minutos y dias, compararlo con lo que guarde en html en lugar de tener tantos if!!!!
function animation (){
  
  // minutes animation
  let bgTopMinutes=document.getElementById("bg-top-minutes");
  let bgBottomMinutes=document.getElementById("bg-bottom-minutes");
  
  // Add or remove the minutes animation class
  if (seconds===0 && minutes>0){
    bgTopMinutes.classList.add('bg-top-animation');  
    bgBottomMinutes.classList.add('bg-bottom-animation')
  }else if(bgTopMinutes.classList.contains("bg-top-animation")){
    bgTopMinutes.classList.remove('bg-top-animation');
    bgBottomMinutes.classList.remove('bg-bottom-animation');
  };
  
  // hours animation
  let bgTopHours=document.getElementById("bg-top-hours");
  let bgBottomHours=document.getElementById("bg-bottom-hours");

  // Add or remove the hours animation class
  if (minutes===0 && hours>0 && seconds===0){
    bgTopHours.classList.add('bg-top-animation');  
    bgBottomHours.classList.add('bg-bottom-animation')
  }else if( bgTopHours.classList.contains("bg-top-animation")){
    bgTopHours.classList.remove('bg-top-animation');
    bgBottomHours.classList.remove('bg-bottom-animation');
  };

  // days animation
  let bgTopDays=document.getElementById("bg-top-days");
  let bgBottomDays=document.getElementById("bg-bottom-days");

  // Add or remove the days animation class
  if (hours===0 && days>0 && minutes===0 && seconds===0){
    bgTopDays.classList.add('bg-top-animation');  
    bgBottomDays.classList.add('bg-bottom-animation')
  }else if( bgTopDays.classList.contains("bg-top-animation")){
    bgTopDays.classList.remove('bg-top-animation');
    bgBottomDays.classList.remove('bg-bottom-animation');
  };

};

// What happens when the coundDown expires 
function expired(x){
  if (distance<=0){
    clearInterval(x); // finish CountDown

    //Complete cards with "00"
    document.getElementById (elementTime [0]).innerHTML="0";
    for (let index = 1; index < elementTime.length; index++) {
      document.getElementById (elementTime [index]).innerHTML="00";    
    }
    // Remove seconds animation 
    document.getElementById("bg-top-seconds").classList.remove('bg-top-seconds');
    document.getElementById("bg-bottom-seconds").classList.remove('bg-bottom-seconds');
    // Change title
    document.getElementById("main-title").innerHTML="EXPIRED";
  }
};

// Reset Countdown
let resetCountdown=document.getElementById('reset-countdown');

resetCountdown.addEventListener('click',()=>  
  {
    resetDate=true;
    console.log (resetDate)
    // Escondemos el modal
    setCountdownSection.style.display='inherit';
    //Mostramos en pantalla la sección del countdown
    countdownSection.style.display='none';
    // necesito limpiar las funciones que se repiten a cada segundo 
    return resetDate
  }
)
