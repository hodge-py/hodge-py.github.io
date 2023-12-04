$(document).ready(function () {
    setPage = ['#homeSweet','#home']

    $("#home").css('display', 'none');
    $("#home").slideDown("slow");
    $(document).on('click','#about', function () {
            $(setPage[1]).slideUp('slow',function() {


                $("#about").css('color','rgb(115, 99, 255)');
                $("#aboutTime").css('display','block');

                $("#aboutTime").slideDown("slow", function(){
                
                $(setPage[0]).css('color','white');
                $(setPage[1]).css('display','none');
    
                setPage[0] = '#about'
                setPage[1] = '#aboutTime'



                });
                

                
            });
        
            
 
    });


    $(document).on('click','#homeSweet', function () {

        if(setPage[0] == '#homeSweet'){
                
        }

        else{
        $(setPage[1]).slideUp('slow',function() {

            $("#homeSweet").css('color','rgb(115, 99, 255)');
            $("#home").css('display','block');

            $("#home").slideDown("slow", function(){
                
                
                $(setPage[0]).css('color','white');
                $(setPage[1]).css('display','none');
    
                setPage[0] = '#homeSweet'
                setPage[1] = '#home'
    
               



            });
            
        });
        
    }  

    });

    $(document).on('click','#skills', function () {
        
        $("#skills").css('color','rgb(115, 99, 255)');
        $("#skills2").css('display','block');

        
        $(setPage[0]).css('color','white');
        $(setPage[1]).css('display','none');

        setPage[0] = '#skills'
        setPage[1] = '#skills2'


});

$(document).on('click','#port', function () {
        
    $("#port").css('color','rgb(115, 99, 255)');
    $("#port2").css('display','block');

    
    $(setPage[0]).css('color','white');
    $(setPage[1]).css('display','none');

    setPage[0] = '#port'
    setPage[1] = '#port2'


});



$(document).on('click','#contact', function () {
        
    $("#contact").css('color','rgb(115, 99, 255)');
    $("#contact2").css('display','block');

    
    $(setPage[0]).css('color','white');
    $(setPage[1]).css('display','none');

    setPage[0] = '#contact'
    setPage[1] = '#contact2'


});







});