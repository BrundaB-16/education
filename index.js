//==============nav===================
var sidem=document.getElementById("sidemenu");

        function openmenu(){
            sidem.style.top="0";
        }
        function closemenu(){
            sidem.style.top="-80%";
        }

        var tl= gsap.timeline();

        tl 
        
        .from(".content h2",{
            opacity:0,
            duration:2
        })
        .from(".content h3",{
            opacity:0,
            duration:2
        })
        .from(".content button",{
            opacity:0,
            scale:1.2,
            duration:1
        })
        
        



        