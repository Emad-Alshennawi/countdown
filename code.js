// set the end date and hide the over time
   const endDate = new Date("Feb 12, 2020 12:00:00").getTime();
   document.getElementById("over").style.display = "none";
// the function of the timer
     function Timer(){
        let timer = setInterval(function(){
            
            let now = new Date().getTime();
            let timer = endDate - now;

            if(timer >= 0){
                let 
                    days  = Math.floor(timer / (1000 * 60 * 60 * 60)),
                    hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    min   = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)),
                    sec   = Math.floor((timer % (1000 * 60)) / 1000);
                
                document.getElementById("day").innerHTML = days;
                document.getElementById("hour").innerHTML = hours; 
                document.getElementById("min").innerHTML   = min;
                document.getElementById("sec").innerHTML   = sec;
            }else{
                clearInterval(timer);
                document.getElementById("day").innerHTML = "0";
                document.getElementById("hour").innerHTML = "0"; 
                document.getElementById("min").innerHTML   = "0";
                document.getElementById("sec").innerHTML   = "0";
                document.getElementById("over").style.display = "block";
            }
        }, 1000)}; 
// click to start the timer
document.getElementById("count").onclick = function(){
    Timer();
}