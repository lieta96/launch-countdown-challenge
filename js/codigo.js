// Set the date we're counting down to
let countDownDate = new Date("Feb, 07, 2021 21:59:00").getTime();

// Update the count down every 1 second
let x = setInterval(countDown, 1000);
let time=[];

function countDown() {
    // Get today's date and time
    now = new Date().getTime();
    // Find the distance between now and the count down date
    distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Stop the countDown
    // if (distance<=0){
    //   clearInterval(x);
    // }
    time=[days,hours, minutes, seconds];
    return time, distance;
};

let elementTime =["days","hours","minutes", "seconds"];

let y = setInterval(innerCard, 1000);

// Display the time in each card
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
  
//set interval to run the minutes, hours, days animation
let z = setInterval(animation, 1000);

// Minutes Hours Days Countdown Animation
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
let w= setInterval(expired, 1000);

function expired(){
  if (distance<=0){
    clearInterval(x); // finish CountDown
    clearInterval(y);
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
