
$(document).ready(function(){
    $("#btn5").hide();
    $("#btn1").on('click',function(){
        $('#table1').css('background-color','yellow');

    });
    $('#btn2').on('click',function(){
       $('#row1').css('background-color','green') ;
       $('#row2').css('background-color','green') ;
       $('#row3').css('background-color','green') ;
       $('#row4').css('background-color','green') ;
    });
    $('#btn4').on('click',function(){
        $('#table1').hide();
        $('#btn5').show();
    });
    $('#btn5').on('click',function(){
        $('#table1').show();
        $('#btn5').hide();
    });
    $('btn3').on('click',function(){
        
    });
    

});