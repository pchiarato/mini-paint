$(document).ready(function(){
    var color = white;
    var colors = "red green blue yellow white"
    var clicking = false;
    
    $('.box').on('click', function(){
       $(this).addClass(color); 
    });
    
    $('.box').on('dblclick', function(){
       $(this).removeClass(colors); 
        
    });
    
    $('.box').on("mousedown",function(e){
        if(e.which == 1){
        clicking = true;
        } 
        else if(e.which == 3){
            $('.box').on('mouseover',function(){
                $(this).removeClass(colors);
            })
        }
    });
    $('.box').on("mouseup",function(){
        clicking = false;
    });
    
    
    
    $('.box').on('mouseover',function(){
        if(clicking){
        $(this).addClass(color);
        }
    });
    
    
    $('#reset').on('click',function(event){
       
        $('.box').removeClass(colors);
        
    });
    
    $('#red').on('click',function(){
        color = "red";
    });
    
    
    $('#blue').on('click',function(){
        color = "blue";
    });
    
    
    $('#green').on('click',function(){
        color = "green";
    });
    
    
    $('#yellow').on('click',function(){
        color = "yellow";
    });
    
    $('#white').on('click',function(){
        color = "white";
    });
    
});