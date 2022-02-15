
$(document).ready(function(){
    $("#btn5").hide();
    $("#btn1").on('click',function(){
        $('#table1').css('background-color','yellow');

    });
    $('#btn2').on('click',function(){
        $("td").parents("tr").css({"background-color": "green"});
        $("td").parents("tr").first().css({"background-color": "blue"});
    
    });
    $('#btn4').on('click',function(){
        $('#table1').hide();
        $('#btn5').show();
    });
    $('#btn5').on('click',function(){
        $('#table1').show();
        $('#btn5').hide();
    });
    $('#btn3').on('click',function(){
       var a = '<table>'
        a += $('button').parents('table').html();
        a+= '</table>'
        document.getElementById("outer").innerHTML= a;
    });

    });
    

