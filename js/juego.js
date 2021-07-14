let timerId = null;
let min = 1;
let max = 3;
let v1 = 0;
let v2 = 0;
let v3 = 0;


function start(){ 
      timerId = setInterval(function(){   
            v1 = getRandomInt(min, max);
            v2 = getRandomInt(min, max);
            v3 = getRandomInt(min, max); 
            document.documentElement.style.setProperty('--imgCuadro1', "url('../img/img" + v1 + ".png')"); 
            document.documentElement.style.setProperty('--imgCuadro2', "url('../img/img" + v2 + ".png')"); 
            document.documentElement.style.setProperty('--imgCuadro3', "url('../img/img" + v3 + ".png')"); 
            var RGBColor1 = getRandomInt(0, 255);
            var RGBColor2 = getRandomInt(0, 255);
            var RGBColor3 = getRandomInt(0, 255);
            document.getElementById('ejec').style.backgroundColor = 'rgba('+RGBColor1+','+RGBColor2+','+RGBColor3+',100)'; 
        }, 50);
}

function stop(){
    
    let seg=5;
    document.getElementById('ejec').disabled = true; 
    setTimeout(() => {  
        if (v1 == v2 && v1 == v3)
        {
            clearInterval(timerId);   
            timerReiniciarId = setInterval(function(){   
                document.getElementById('ejec').style.backgroundColor = 'green'; 
                document.getElementById('ejec').value ='¡¡¡¡Ha ganado!!!';  
            }, 1000);
        
            setTimeout(() => { 
                clearInterval(timerReiniciarId);
                document.getElementById('ejec').disabled = false; 
                document.getElementById('ejec').style.backgroundColor = 'black'; 
                document.getElementById('ejec').value = '¡¡Jugar!!';
            }, seg*1000); 
        }
        else{
            clearInterval(timerId);   
            timerReiniciarId = setInterval(function(){   
                document.getElementById('ejec').style.backgroundColor = 'red'; 
                document.getElementById('ejec').value ='Ha perdido, tendrá otro intento en ' + seg + ' segundos.'; 
                 
                seg--;
            }, 1000);
        
            setTimeout(() => { 
                clearInterval(timerReiniciarId);
                document.getElementById('ejec').disabled = false; 
                document.getElementById('ejec').style.backgroundColor = 'black'; 
                document.getElementById('ejec').value = '¡¡Jugar!!';
            }, seg*1000); 
        }
    
    }, 3000); 

}
 
function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}