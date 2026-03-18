const bulb = document.getElementById("bulb");
const btn=document.getElementById("btn");
const text=document.getElementById("showtext");

let isON=false;
btn.addEventListener("click",()=>{
    if(isON)
    {
        bulb.src="Light-OFF.gif";
        text.textContent="Bulb is off";
        btn.textContent="Turn ON";
        isON=false;
    }
    else{
        bulb.src="light2.gif";
        text.textContent="Bulb is on";
        btn.textContent="Turn OFF";
        isON=true;
    }
});