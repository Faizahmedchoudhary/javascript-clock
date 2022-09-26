    showtime = () => {

        
        var today = new Date();
        
        
        var a = today.getHours();
        var b =  today.getMinutes();
        var c =  today.getSeconds();

     
    document.querySelector('.hour').innerHTML = a + ':'; 
    document.querySelector('.minutes').innerHTML = b + ':';
    document.querySelector('.seconds').innerHTML = c + ':';




    if(a > 12){
        document.querySelector('.day').innerHTML = 'PM';
    }
    else{
        document.querySelector('.day').innerHTML = 'AM';
    }
    setTimeout( showtime , 1000);
}

showtime();
