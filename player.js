function player(){}

player.butterflyLifeBarElement = "";
player.keyElement = "";

player.delayTime;
var visibil;
player.butterflyItem=""
var visibilRunning = 0;


player.init = function(){

    player.butterflyItem = document.getElementById("1");
    player.butterflyLifeBarElement = document.getElementById("butterflyLifeBarStatus");
    player.keyElement = document.getElementById("playerKey")

    //var butterflyItemProp = map.getItemObjectPropertyFromId(1);
    //player.setButterflyLife(butterflyItemProp.life);
 
    
};

   //Oyuncunun yukarıdaki hayat barını değiştirir
    player.setButterflyLifeBar = function($life){
    //console.log($life);
    player.delayTime = 15444 - 84.44 * $life;

      //console.log($life,player.delayTime);
    
    player.butterflyLifeBarElement.style.width = $life + "%";
    player.butterflyLifeBarElement.textContent = parseInt($life);
    
    /////////////////rassal renk değiştirme

    function random(min,max) {
      const num = Math.floor(Math.random()*(max-min)) + min;
      return num;
    }

    randomColor = function() {
      return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
    }
    const newBgColor = randomColor();


    if(Number($life.toFixed(2)) <= 15.00){
      player.butterflyLifeBarElement.style.setProperty("background-color", newBgColor);
    }

    

    if(Number($life.toFixed(2)) == 10.01) {
        visibil = setInterval(setVis,700); //700 milisaniyede bir yanıp sönecek
        //vis();
       // console.log(Number(butterflyItemProp.life.toFixed(2)))
       // }else if(Number(butterflyItemProp.life.toFixed(2)) > 10.01){
        //clearInterval(visibil);
        visibilRunning = 1
        //setInterval(reklamGosterme,1000);
      
      }

      
     
        if(visibilRunning = 1 && Number($life.toFixed(2)) > 10.01){
          
          clearInterval(visibil);
          player.butterflyLifeBarElement.style.visibility = "visible";
          player.butterflyItem.parentElement.style.visibility = "visible";
          visibilRunning = 0;
        }
    

    setVis = function(){    
        if(player.butterflyLifeBarElement.style.visibility == "visible")
        {
          player.butterflyLifeBarElement.style.visibility = "hidden";
          player.butterflyItem.parentElement.style.visibility = "hidden";
          //veya $("#yanip-sonen").attr("style","visibility:hidden");
        }
        else
        {
          player.butterflyLifeBarElement.style.visibility = "visible";
          player.butterflyItem.parentElement.style.visibility = "visible";
          //player.butterflyLifeBarElement.style.backgroundColor = "gold"
          //veya $("#yanip-sonen").attr("style","visibility:visible");
        }
      
    }
    
    
    //player.butterflyLifeBarElement.textContent = parseInt($life);

    
};




    player.setKeyElement = function($id){

        var changedElement = document.getElementById($id)

        //alert("anahtar tanındı")
        //console.log(changedElement)
        changedElement.style.display = "none";

        player.keyElement.style.display = "block"

    }



