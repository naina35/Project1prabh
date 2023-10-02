function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
function shoWdate()
{
    var DATE=new Date();
    var day=DATE.getDate();
    var month=DATE.getMonth()+1;
    var today=day+"/"+month+"/"+DATE.getFullYear();
    document.getElementById("date").innerText = today;
}
shoWdate();

//selectors
let screen = document.querySelector('.screen');
let panel = document.querySelector('.panel');
let equal = document.getElementById('equal')

//eventListeners
panel.addEventListener('click', numberToScreen);
equal.addEventListener('click', resolve)

//functions
// if we push a button on calculator
function numberToScreen(num){
  
  //if its C, delete last digit
   const button = num.target.innerHTML;
  if(button==='C'){
   let onScreen = (screen.innerHTML)
   screen.innerHTML = onScreen.slice(0, -1)
    
   //else if its 0 on screen, replace it with the pushed buttons digit
  }else
  if(screen.innerHTML=== '0'){
    screen.innerHTML = button
    
    //else, add the pushed buttons digit to the end 
  }else{
    screen.innerHTML += button
  }
 }

function resolve(){
  
  //what is written on screen
  let onScreen = (screen.innerHTML)
  
// resolve what is on screen,  to the nearest thousandth
  screen.innerHTML=Math.round(eval(onScreen) * 1000) / 1000
}