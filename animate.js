
function animate() {};






//Bir nesnenin konumunu animasyonlu olarak değiştirir.



animate.corItemX = 5;
animate.corItemY = 3;

animate.butterflyItem="";

//animate.changeItem=""

animate.damageId = [];
animate.foodId = [];

var corItemXNew;
var corItemYNew;
var newType;

animate.functionRunning = 1;

var visibil;




animate.init = function(){
  
  
  //animate.butterflyItemProp.life
  
  

  //ilk çalışan kod
  butterflyItem = document.getElementById("1");    
    
  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }
  
    switch(event.code) {
      case "KeyS":
      case "ArrowDown":
        // Handle "back"
        
        butterflyItem.src = "asset/" + "butterfly" + ".down.png";
        corItemXNew=animate.corItemX+1
        corItemYNew=animate.corItemY
        animate.updateLife();
        animate.dontGoDefinition();
        var myVar = setInterval(animate.updatePosition, player.delayTime);//animate.updatePosition();
        
        //butterflyItem.animate({ "top": "+=32px" }, 1000 );

        

        //butterflyItem.style.top = "150px"//`${(corItemX - 1) * 32}px`;
        //butterflyItem.style.left = "150px"//`${(corItemX - 1) * 32}px`;
        //console.log(corItemX,corItemY)
   
        break;    
      case "KeyW":
      case "ArrowUp":
        // Handle "forward"
        
        butterflyItem.src = "asset/" + "butterfly" + ".up.png";
        corItemXNew=animate.corItemX-1
        corItemYNew=animate.corItemY
        animate.updateLife();
        animate.dontGoDefinition();
        var myVar = setInterval(animate.updatePosition, player.delayTime);//animate.updatePosition();
        
        //animate.updatePosition();
        //butterflyItem.animate({ "top": "-=32px" }, 1000 );

        //console.log(butterflyItem.style.top,butterflyItem.style.left);
       //butterflyItem.style.top =  "(corItemX-1)*32" + 'px';
        //butterflyItem.style.left = "(corItemY-1)*32" + 'px';
        //console.log(corItemX,corItemY)
        break;
      case "KeyA":
      case "ArrowLeft":
        // Handle "turn left"
        butterflyItem.src = "asset/" + "butterfly" + ".left.png";
        corItemXNew=animate.corItemX
        corItemYNew=animate.corItemY-1
        animate.updateLife();
        animate.dontGoDefinition();
        var myVar = setInterval(animate.updatePosition, player.delayTime);//animate.updatePosition();
        
        //animate.updatePosition()
        //console.log(corItemX,corItemY)
        break;
      case "KeyD":
      case "ArrowRight":
        // Handle "turn right"
        butterflyItem.src = "asset/" + "butterfly" + ".right.png";
        corItemXNew=animate.corItemX
        corItemYNew=animate.corItemY+1
        animate.updateLife();
        animate.dontGoDefinition();
        var myVar = setInterval(animate.updatePosition, player.delayTime);//animate.updatePosition();
        //animate.updatePosition()
        
        //console.log(corItemX,corItemY)
        break;

      case "ShiftLeft":
        // Handle "turn right"
        //butterflyItem.src = "asset/" + "butterfly" + ".right.png";
        corItemXNew=animate.corItemX
        corItemYNew=animate.corItemY
        //animate.updateLife();
        animate.changedImage();
        //var myVar = setInterval(animate.updatePosition, 1000);//animate.updatePosition();
        //animate.updatePosition()
        //console.log(map.idCorX[5])
        //console.log(corItemX,corItemY)
     
        break;

      case "KeyZ":   
    
        zMesaj();
  
        break;
      


    }  event.preventDefault();

   

  }, true);

  //player.setButterflyLife(50);
  

  /*
  if(butterflyItemProp.life == 0){

    alert('game over')
    clearInterval(myVar)
  } 
  */


};

animate.gameOver = function(){
  if(butterflyItemProp.life == 0){

    alert('game over')
    clearInterval(myVar)

  }
}

  
  ///////////////////////
  zMesaj = function(){
    var mesaj = document.getElementById("msj");
    mesaj.innerHTML = "z tuşun çalışmıyor"
  }
 
  animate.updatePosition = function (){

    var _elementItem =  map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);
   
    /*
    var c2 = map.getItemObjectIdFromCor(5,3);
    //var c = map.corId[x5y3];
    console.log("c: "+c2)
    */
    
    //map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);
    //console.log(_elementItem.type);

    if((_elementItem.canGo == 1 && _elementItem.needKey == 0) || _elementItem == 0){
    

      //////////////
      
      //butterflyItem.parentElement.style.top = (corItemXNew-1)*32 + 'px';
      this.butterflyItem.parentElement.animate({duration: 2000});
      this.butterflyItem.parentElement.animate({top:(corItemXNew-1)*32 + 'px'},player.delayTime);
      //butterflyItem.parentElement.style.left = (corItemYNew-1)*32 + 'px';
      this.butterflyItem.parentElement.animate({left:(corItemYNew-1)*32 + 'px'},player.delayTime);
      
      this.butterflyItem.parentElement.animate({easing: 'linear'},player.delayTime);
      //this.butterflyItem.parentElement.animate({direction: 'alternate',},player.delayTime);
      
//////////////////////
/*
      this.butterflyItem.parentElement.style.top = (corItemXNew-1)*32 + 'px';
      this.butterflyItem.parentElement.style.left = (corItemYNew-1)*32 + 'px';
      this.butterflyItem.parentElement.animate({duration: 2000});
      */
///////////////////////

      butterflyItem.style.top = (corItemXNew-1)*32 + 'px';
      butterflyItem.style.left = (corItemYNew-1)*32 + 'px';
      
    



      animate.corItemX = corItemXNew;
      animate.corItemY = corItemYNew;

      map.changeItemCor(butterflyItem.id-1,animate.corItemX,animate.corItemY);//kelebegın koordınatlarını gunceller

      if((animate.corItemX == 5 && animate.corItemY == 25 && map.getItemObjectPropertyFromId(4).needKey == 0) 
      || (animate.corItemX == 5 && animate.corItemY == 26) || (animate.corItemX == 5 && animate.corItemY == 27)){
        map.changeItemImage(4);
      }else {

        var changedElement = document.getElementById(4)


        changedElement.src = map.getItemObjectPropertyFromId(4).activeSrc;
        
      }


      var butterflyItemProp = map.getItemObjectPropertyFromId(1);
      butterflyItemProp.life-=0.01;
      if(butterflyItemProp.life < 0) butterflyItemProp.life = 0;{
        player.setButterflyLifeBar(butterflyItemProp.life);
        //butterflyItemProp.life == butterflyItemProp.life-_elementItem.damage
      }

      

    }

    

    //console.log(bug.elementCorS1);

    
  }



  animate.updateLife = function(){

    

    var _elementItem =  map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);

    var damageValue = _elementItem.damage
    

    //console.log(damageValue,animate.damageId.indexOf(_elementItem.id),animate.damageId)
    //alert(animate.damageId.indexOf(_elementItem.id))

    if(damageValue > 0 && animate.damageId.indexOf(_elementItem.id) < 0){

    //var changeItem = document.getElementById("trap");

    var butterflyItemProp = map.getItemObjectPropertyFromId(1);
      if(animate.damageId.indexOf(_elementItem.id) < 0){
        butterflyItemProp.life -= damageValue
        var audio = new Audio('sound/hurt.mp3');
        audio.play();
        
        //console.log("Trap:" + butterflyItemProp.life)
        if(butterflyItemProp.life < 0){
          butterflyItemProp.life = 0;

          alert('You are died but have another chance')
            
          

        }else if(0 < butterflyItemProp.life < 10){

          butterflyItemProp.life = 11;
        }
 

       // if(0 < butterflyItemProp.life < 10){
         // butterflyItemProp.life = 11;
       // }
        
        
        player.setButterflyLifeBar(butterflyItemProp.life);
      }
      
      
      
      animate.damageId.push(_elementItem.id)
      

      map.changeItemImage(_elementItem.id);
      
      //console.log(animate.butterflyItemProp.life)


    //console.log(damageId.indexOf(_elementItem.id),damageValue,_elementItem.id,butterflyItemProp.life,damageId)
    
    }

    
  }

 

  animate.changedImage = function(){

    map.shift = 1;

    var _elementItem =  map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);

   

    //console.log(_elementItem.type);

    var foodValue = _elementItem.foodValue;

    

    //console.log(_elementItem.canTake)

    //console.log(keyTaken)

    if(foodValue > 0 && animate.foodId.indexOf(_elementItem.id) < 0){

  
      //var changeItem = document.getElementById("trap");
  
      var butterflyItemProp = map.getItemObjectPropertyFromId(1);
  
        if(animate.foodId.indexOf(_elementItem.id) < 0){
          butterflyItemProp.life += foodValue

          var audio = new Audio('sound/eat.wav');
          audio.play();
        }
        
        
        animate.foodId.push(_elementItem.id)
        
  
        map.changeItemImage(_elementItem.id);
        
        
        //console.log(butterflyItemProp.life)
        if(butterflyItemProp.life > 100)butterflyItemProp.life = 100;

        player.setButterflyLifeBar(butterflyItemProp.life);
        
      //console.log(damageId.indexOf(_elementItem.id),damageValue,_elementItem.id,butterflyItemProp.life,damageId)
      
      }

      
      if(_elementItem.canTake == 1){
        //alert("anahtar alınıyor")
        var audio = new Audio('sound/key.wav');
        audio.play();
        _elementItem.canTake = 2;
        map.getItemObjectPropertyFromId(4).needKey = 0;
        map.getItemObjectPropertyFromId(4).canGo = 1;
        player.setKeyElement(_elementItem.id);

      }

      map.shift = 0;
      
  }

  animate.dontGoDefinition = function(){

    var _elementItem =  map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);

    if(_elementItem.canGo == 0){

     
      switch(_elementItem.type) { 

      case 'rock':
      //alert(map.getItemObjectCorFromIdX(_elementItem.id))

          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "kayayı mı delecen"
            

            break;

        case 'tree1':
          
          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "ağaç o ağaç";
            break;

        case 'tree2':
          
          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "ağacı da mı gormuyosun"
            
            break;

        case 'wall1':
          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "atlamak için z tuşuna bas"
        
            

        case 'wall2':

          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "Duvardan geçemezsin"

            break;

        case 'door':
          if(_elementItem.needKey == 1){
          getmesajBoxProp(_elementItem.type,_elementItem.id);
          var mesaj = document.getElementById("msj");
          mesaj.innerHTML = "Anahtarı al"
          }
            break;

        }
    }

  }

  getmesajBoxProp = function($type,$id){

    var mesaj = document.getElementById("msj");
            //div.style.width = "100px";
            mesaj.style.setProperty("width", 120 + "px");
            mesaj.style.setProperty("height", 15 + "px");
            mesaj.style.setProperty("Top", (map.getItemObjectCorFromIdX($id)-1)*32 + "px");
            mesaj.style.setProperty("Left", (map.getItemObjectCorFromIdY($id)-1)*32 + "px");
            mesaj.style.display = "block"
            mesaj.style.setProperty("background", "rgba(0, 151, 19, 0.1)");
            mesaj.style.setProperty("color", "white");
            //mesaj.style.setProperty("fontSize", 1 + "px");
            //mesaj.innerHTML = $type + " var gormuyon";
            mesaj.style.setProperty("opacity", "0.7");
            setTimeout(function(){mesaj.style.display = "none"},2000);


  }

 
    
    
  
    

  
    
   

