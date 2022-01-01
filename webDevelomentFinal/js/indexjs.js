$(document).ready(function(){
    let audio=document.querySelector("audio");
    audio.play();
   
    let menu_click=false;
    $(".navbar-toggler").click(function(){
        
        menu_click=!menu_click;
        if(menu_click){
            $(".navbar-icon-bar").attr("menu-click","true");
        }
        else{
            $(".navbar-icon-bar").attr("menu-click","false");
        }
    });
        
 });
 