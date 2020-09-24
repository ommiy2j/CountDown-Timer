const Event_date=document.querySelector(".Event_date");
const hour_display=document.querySelector('#hour_display');
const min_display=document.querySelector('#min_display');
const sec_display=document.querySelector('#sec_display');
const days_display=document.querySelector('#days_display');
const start=document.querySelector(".start button");

document.addEventListener('DOMContentLoaded',()=>{
    var date=new Date();
    Event_date.addEventListener('blur',()=>{
        var eventDate=new Date(event.target.value);
        console.log(eventDate);
        if(Event_date.value==""){
            console.log(25)
        }
        else{ 
           var today = new Date();
            var Christmas = eventDate;
            var diffMs = (Christmas - today);
            if(diffMs<0){
                alert("Event Cannot Be set");
            } // milliseconds between now & Christmas
            else{
                var diffDays = Math.floor(diffMs / 86400000); // days
                var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
                var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                var diffsec = parseInt(Math.abs(Christmas.getTime() - today.getTime()) / (1000) % 60); // seconds
                days_display.innerHTML=diffDays;
                hour_display.innerHTML=diffHrs;
                min_display.innerHTML=diffMins;
                sec_display.innerHTML=diffsec;
            }
            


            start.addEventListener('click',()=>{
                var x=setInterval(()=>{
                var now = new Date().getTime();
    
                // Find the distance between now and the count down date
                var distance = eventDate - now;
                // console.log(distance)
                // Time calculations for days, hours, minutes and seconds
                if (distance < 0) {
                    clearInterval(x);
                   //document.getElementById("demo").innerHTML = "EXPIRED";
                  }

                else if(distance<1000){
                    sec_display.innerHTML=0;
                    min_display.innerHTML=0;
                    hour_display.innerHTML=0;
                    days_display.innerHTML=0;
                    clearInterval(x);
                    document.body.classList.add('celebration');
                }
                else{
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    var ms= Math.floor((distance % (1000 * 60)));
                    sec_display.innerHTML=seconds;
                    min_display.innerHTML=minutes;
                    hour_display.innerHTML=hours;
                    days_display.innerHTML=days;
                    console.log(ms)
                }
                
                },1000)
                
                
        })
        
        }

       })
})
