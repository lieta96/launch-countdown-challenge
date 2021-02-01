// Set the date we're counting down to
let countDownDate = new Date("Feb 09, 2021 00:00:00").getTime();

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
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
    
  };
  let y = setInterval(minutesAnimation, 1000);
//Minutes Countdown Animation
function minutesAnimation (){
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
  
  let bgTopMinutes=document.getElementById("bg-top-minutes");
  let bgBottomMinutes=document.getElementById("bg-bottom-minutes");
  if (seconds===0){
    bgTopMinutes.classList.add('bg-top-minutes');  
    bgBottomMinutes.classList.add('bg-bottom-minutes')
  }else if(bgTopMinutes.classList.contains("bg-top-minutes")){
    bgTopMinutes.classList.remove('bg-top-minutes');
    bgBottomMinutes.classList.remove('bg-bottom-minutes');
  }
};

