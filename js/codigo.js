// Set the date we're counting down to
let countDownDate = new Date("Feb 4, 2021 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(countDown, 1000);

function countDown() {

    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with each id
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    
    //Add "0"
    if (seconds <10){
      document.getElementById("seconds").innerHTML="0"+seconds
    }
    if (minutes<10){
      document.getElementById("minutes").innerHTML="0"+minutes
    }
    if (hours <10){
      document.getElementById("hours").innerHTML="0"+hours
    }
  
    //If the count down is finished, write some text 
    if (distance < 0) {
       clearInterval(x); //NO FUNCIONA :'(
       document.getElementById("main-title").innerHTML = "EXPIRED";
    }
    
  };
  
// Minutes Hours Days Countdown Animation
//set interval to run the minutes animation
let y = setInterval(animation, 1000);

function animation (){
  // Get today's date and time
  let now = new Date().getTime();
  
  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  seconds= parseInt(seconds);
  minutes= parseInt(minutes);
  hours= parseInt(hours);
  
  // seconds animation
  let bgTopMinutes=document.getElementById("bg-top-minutes");
  let bgBottomMinutes=document.getElementById("bg-bottom-minutes");
  
  // Add or remove the animation class
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

  // Add or remove the animation class
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

  // Add or remove the animation class
  if (hours===0 && days>0 && minutes===0 &&seconds===0){
    bgTopDays.classList.add('bg-top-animation');  
    bgBottomDays.classList.add('bg-bottom-animation')
  }else if( bgTopDays.classList.contains("bg-top-animation")){
    bgTopDays.classList.remove('bg-top-animation');
    bgBottomDays.classList.remove('bg-bottom-animation');
  };

}