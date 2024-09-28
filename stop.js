let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');


let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
startbtn.addEventListener('click',function() {
  timer=true;
  stopwatch();
  
});
stopbtn.addEventListener('click',function() {
  timer=false;
});
resetbtn.addEventListener('click',function() {
  timer=false;
  hr=0;
  min=0;
  sec=0;
  count=0;
  document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
  
});

function stopwatch() {
  if (timer) {
    count++;
  }
   if (count===100) {
    sec++;
    count=0;
    
  }
   if (sec===60) {
    min++;
    sec=0;
    
  } if (min===60) {
    hr++;
    min=0;
    sec=0;

    
  }
  document.getElementById('hr').innerHTML = hr < 10 ? "0" + hr : hr;
  document.getElementById('min').innerHTML = min < 10 ? "0" + min : min;
  document.getElementById('sec').innerHTML = sec < 10 ? "0" + sec : sec;
  document.getElementById('count').innerHTML = count < 10 ? "0" + count : count;
  
  setTimeout(stopwatch, 100);
}