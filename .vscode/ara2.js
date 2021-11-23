

function bug() {}

bug.corItemXS1 = 12;
bug.corItemYS1 = 2;

bug.corItemXS2 = 3;
bug.corItemYS2 = 21;


var corItemBug1XNew;
var corItemBug1YNew;

var corItemBug2XNew;
var corItemBug2YNew;

bug.elementCorS1 = [];

bug.butterflyYakalandi1 = 0;
bug.butterflyYakalandi2 = 0;

bug.yakalananCorXS1;
bug.yakalananCorYS1;

bug.yakalananCorXS2;
bug.yakalananCorYS2;

bug.bugCorS1;

bug.elementCorS2 = [];



bug.bugCorS2;




bug.init = function(){
    
    bugItemSpider1 = document.getElementById("5");
    bugItemSpider2 = document.getElementById("7");


    bugItemBee = document.getElementsByClassName("bee");

    bugItemPropS1 = map.getItemObjectPropertyFromId(5)

    //console.log(bugItemPropS1.damage,bugItemPropS1.life);

    setInterval(bug.randomRunS1, 500);
    setInterval(bug.thinkingMoveS2, 200);

}

bug.randomRunS1 = function(){
        
    bug.thinkingS1();
    if(bug.butterflyYakalandi1 == 1){
        bug.thinkingMoveS1();
    }else{

        switch(rassal1Yon(1,4)){

        case 1:

            bug.move1To(1);
            break;

        case 2:

            bug.move1To(2);
            break;
        

        
        case 3:

            bug.move1To(3);
            break;
        
        
        case 4:

            bug.move1To(4);
            break;
        

        }

    }
}


bug.randomRunS2 = function(){
        
    
    
        
    
    
    
        switch(rassal2Yon(1,4)){

        case 1:

            bug.move2To(1);
            break;

        case 2:

            bug.move2To(2);
            break;
        
        case 3:

            bug.move2To(3);
            break;
        
        
        case 4:

            bug.move2To(4);
            break;
        

        }
    
    
}

rassal1Yon = function randomInt(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

rassal2Yon = function randomInt(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




bug.move1To = function($direction){

    //console.log($direction);
    

        switch($direction){

            case 1:

                bugItemSpider1.src = "asset/" + "spider" + ".up.png";

                corItemBug1XNew=bug.corItemXS1-1
                corItemBug1YNew=bug.corItemYS1
                
                var myBug = setInterval(bug.updatePosition, 500);//bug.updatePosition();
                //bug.updatePosition()
                break;

            case 2:
                
                bugItemSpider1.src = "asset/" + "spider" + ".down.png";

                corItemBug1XNew=bug.corItemXS1+1
                corItemBug1YNew=bug.corItemYS1

                var myBug = setInterval(bug.updatePosition, 500);//bug.updatePosition();
                //bug.updatePosition()
                break;
            
            case 3:    
                bugItemSpider1.src = "asset/" + "spider" + ".left.png";

                corItemBug1XNew=bug.corItemXS1
                corItemBug1YNew=bug.corItemYS1-1

                var myBug = setInterval(bug.updatePosition, 500);//bug.updatePosition();
                //bug.updatePosition()
                break;

            case 4:
                
                bugItemSpider1.src = "asset/" + "spider" + ".right.png";

                corItemBug1XNew=bug.corItemXS1
                corItemBug1YNew=bug.corItemYS1+1

                var myBug = setInterval(bug.updatePosition, 500);//bug.updatePosition();
                //bug.updatePosition()
                break;
        }



}


bug.move2To = function($direction){

    //console.log($direction);
    

        switch($direction){

            case 1:

                bugItemSpider2.src = "asset/" + "spider" + ".up.png";

                corItemBug2XNew=bug.corItemXS2-1
                corItemBug2YNew=bug.corItemYS2
                var myBug = setInterval(bug.updatePosition, 200);//bug.updatePosition();
                //bug.updatePosition()
                break;

            case 2:
                

                bugItemSpider2.src = "asset/" + "spider" + ".down.png";

                corItemBug2XNew=bug.corItemXS2+1
                corItemBug2YNew=bug.corItemYS2
                var myBug = setInterval(bug.updatePosition, 200);//bug.updatePosition();
                //bug.updatePosition()
                break;
            
            case 3:    

                bugItemSpider2.src = "asset/" + "spider" + ".left.png";

                corItemBug2XNew=bug.corItemXS2
                corItemBug2YNew=bug.corItemYS2-1
                var myBug = setInterval(bug.updatePosition, 200);//bug.updatePosition();
                //bug.updatePosition()
                break;

            case 4:

                bugItemSpider2.src = "asset/" + "spider" + ".right.png";

                corItemBug2XNew=bug.corItemXS2
                corItemBug2YNew=bug.corItemYS2+1
                var myBug = setInterval(bug.updatePosition, 200);//bug.updatePosition();
                //bug.updatePosition()
                break;
        }

    

}

bug.thinkingS1 = function(){

    bug.butterflyYakalandi1 = 0;    
     
     var val = [map.getItemObjectPropertyFromId(1).x,map.getItemObjectPropertyFromId(1).y];
     
     
     var sval = val.join("-");
     for(var i = bug.elementCorS1.length-1; i >= 0; i--)
     {
         var sar = bug.elementCorS1[i].join("-");
         if (sar == sval) 
         {
           bug.butterflyYakalandi1 = 1;
            //console.log("kelebek burda: " +bug.elementCorS1[i][0],bug.elementCorS1[i][1],map.getItemObjectCorFromIdX(5),map.getItemObjectCorFromIdY(5))
            
            bug.bugCorS1 = bug.elementCorS1[i]
            return bug.elementCorS1[i]
        }
     
    }
}

/*
bug.thinkingS2 = function(){

    bug.butterflyYakalandi2 = 0;    
     
     var val = [map.getItemObjectPropertyFromId(1).x,map.getItemObjectPropertyFromId(1).y];
     
     
     var sval = val.join("-");
     for(var i = bug.elementCorS2.length-1; i >= 0; i--)
     {
         var sar = bug.elementCorS2[i].join("-");
         if (sar == sval) 
         {
           bug.butterflyYakalandi2 = 1;
            //console.log("kelebek burda: " +bug.elementCorS1[i][0],bug.elementCorS1[i][1],map.getItemObjectCorFromIdX(5),map.getItemObjectCorFromIdY(5))
            
            bug.bugCorS2 = bug.elementCorS2[i]
            return bug.elementCorS2[i]
        }
     
    }
}
*/

bug.thinkingMoveS1 = function(){

     //////////////////////////////////////////////buradan baslıyor
     

    if(bug.butterflyYakalandi1 == 1){

       if(bug.bugCorS1[0] > map.getItemObjectCorFromIdX(5)) {bug.yakalananCorXS1 = map.getItemObjectCorFromIdX(5)+1}
       if(bug.bugCorS1[0] == map.getItemObjectCorFromIdX(5)) {bug.yakalananCorXS1 = map.getItemObjectCorFromIdX(5)}
       if(bug.bugCorS1[0] < map.getItemObjectCorFromIdX(5)) {bug.yakalananCorXS1 = map.getItemObjectCorFromIdX(5)-1}

       
       if(bug.bugCorS1[1] > map.getItemObjectCorFromIdY(5)) {bug.yakalananCorYS1 = map.getItemObjectCorFromIdY(5)+1}
       if(bug.bugCorS1[1] == map.getItemObjectCorFromIdY(5)) {bug.yakalananCorYS1 = map.getItemObjectCorFromIdY(5)}
       if(bug.bugCorS1[1] < map.getItemObjectCorFromIdY(5)) {bug.yakalananCorYS1 = map.getItemObjectCorFromIdY(5)-1}

    }

    //console.log(bug.bugCorS1[0],bug.bugCorS1[1],bug.yakalananCorXS1,bug.yakalananCorYS1)


////////////////////////////////////////////
bugItemSpider1 = document.getElementById("5");
    
//this.bugItemSpider1.parentElement.animate({duration: 500});
bugItemSpider1.parentElement.style.top = (bug.yakalananCorXS1-1)*32 + 'px';
//this.bugItemSpider1.parentElement.animate({top:(corItemBug1XNew-1)*32 + 'px'},20000);
bugItemSpider1.parentElement.style.left = (bug.yakalananCorYS1-1)*32 + 'px';
//this.bugItemSpider1.parentElement.animate({left:(corItemBug1YNew-1)*32 + 'px'},20000);

//this.bugItemSpider1.parentElement.animate({easing: 'linear'},500);

bugItemSpider1.style.top = (bug.yakalananCorXS1-1)*32 + 'px';
bugItemSpider1.style.left = (bug.yakalananCorYS1-1)*32 + 'px';
//bugItemSpider1.animate({duration: 500});

bug.corItemXS1 = bug.yakalananCorXS1;
bug.corItemYS1 = bug.yakalananCorYS1;

map.changeItemCor(bugItemSpider1.id-1,bug.corItemXS1,bug.corItemYS1);//1. spider ın koordınatlarını gunceller

//map.getItemObjectPropertyFromId(5).x = bug.corItemXS1;
//map.getItemObjectPropertyFromId(5).y = bug.corItemYS1;

var corArrayS1 = [corX=bug.corItemXS1,corY=bug.corItemYS1]
bug.elementCorS1.push(corArrayS1)
if(bug.elementCorS1.length>20){

  bug.elementCorS1.shift();
}

///////////////////////////////////////////////////////////buraya kadar 
    bug.butterflyYakalandi1 = 0;
}


bug.thinkingMoveS2 = function(){

    //////////////////////////////////////////////buradan baslıyor
    
    
    var butterflyX = map.getItemObjectPropertyFromId(1).x
    var butterflyY = map.getItemObjectPropertyFromId(1).y

    var bugS2X = map.getItemObjectPropertyFromId(7).x
    var bugS2Y = map.getItemObjectPropertyFromId(7).y

    

    if(butterflyX > bugS2X && butterflyY > bugS2Y) {
        bug.yakalananCorXS2 = bugS2X+1
        bug.yakalananCorYS2 = bugS2Y
    }

    if(butterflyX > bugS2X && butterflyY == bugS2Y) {
        bug.yakalananCorXS2 = bugS2X+1
        bug.yakalananCorYS2 = bugS2Y
    }

    if(butterflyX > bugS2X && butterflyY < bugS2Y) {
        bug.yakalananCorXS2 = bugS2X+1
        bug.yakalananCorYS2 = bugS2Y
    }

    if(butterflyX == bugS2X && butterflyY > bugS2Y) {
        bug.yakalananCorXS2 = bugS2X
        bug.yakalananCorYS2 = bugS2Y+1
    }

    if(butterflyX == bugS2X && butterflyY == bugS2Y) {
        bug.yakalananCorXS2 = bugS2X
        bug.yakalananCorYS2 = bugS2Y
    }

    if(butterflyX == bugS2X && butterflyY < bugS2Y) {
        bug.yakalananCorXS2 = bugS2X
        bug.yakalananCorYS2 = bugS2Y-1
    }

    if(butterflyX < bugS2X && butterflyY > bugS2Y) {
        bug.yakalananCorXS2 = bugS2X-1
        bug.yakalananCorYS2 = bugS2Y
    }

    
    if(butterflyX < bugS2X && butterflyY == bugS2Y) {
        bug.yakalananCorXS2 = bugS2X-1
        bug.yakalananCorYS2 = bugS2Y
    }

    
    if(butterflyX < bugS2X && butterflyY < bugS2Y) {
        bug.yakalananCorXS2 = bugS2X-1
        bug.yakalananCorYS2 = bugS2Y
    }

    //console.log(bug.yakalananCorXS2,bug.yakalananCorYS2,butterflyX,butterflyY)

    var gudumluElement2 =  map.getItemObjectPropertyFromCor(bug.yakalananCorXS2,bug.yakalananCorYS2);
    
    //if((gudumluElement2.canGo == 1 && gudumluElement2.needKey == 0 && gudumluElement2.type != 'door' ) || gudumluElement2 == 0 || gudumluElement2.type == 'butterfly')
    //{

        console.log(bugS2X,bugS2Y,butterflyX,butterflyY,bug.yakalananCorXS2,bug.yakalananCorYS2,gudumluElement2)
    
        
    //if(gudumluElement2.canGo == 1 || gudumluElement2.canGo == 'undefined' || gudumluElement2.type == 'grass'){ //|| gudumluElement2 == "0"
        
        console.log("if içinde: "+bugS2X,bugS2Y,butterflyX,butterflyY,bug.yakalananCorXS2,bug.yakalananCorYS2,gudumluElement2)
////////////////////////////////////////////
    var bugItemSpider2 = document.getElementById("7");
    
    
    
    //his.bugItemSpider1.parentElement.animate({duration: 2000});
    
    bugItemSpider2.parentElement.style.top = (bug.yakalananCorXS2-1)*32 + 'px';
    //this.bugItemSpider1.parentElement.animate({top:(corItemBug1XNew-1)*32 + 'px'},20000);
    bugItemSpider2.parentElement.style.left = (bug.yakalananCorYS2-1)*32 + 'px';
    //this.bugItemSpider1.parentElement.animate({left:(corItemBug1YNew-1)*32 + 'px'},20000);

    //this.bugItemSpider1.parentElement.animate({easing: 'linear'},500);

    bugItemSpider2.style.top = (bug.yakalananCorXS2-1)*32 + 'px';
    bugItemSpider2.style.left = (bug.yakalananCorYS2-1)*32 + 'px';
    //bugItemSpider1.animate({duration: 500});

    bug.corItemXS2 = bug.yakalananCorXS2;
    bug.corItemYS2 = bug.yakalananCorYS2;

    map.changeItemCor(bugItemSpider2.id-1,bug.yakalananCorXS2,bug.yakalananCorYS2);//2. spider ın koordınatlarını gunceller

    //map.getItemObjectPropertyFromId(7).x = bug.corItemXS2;
    //map.getItemObjectPropertyFromId(7).y = bug.corItemYS2;
    //}else {
        //alert("takıldık")
      //  bug.randomRunS2()
    //}   
    //}else{
      //  bug.randomRunS2()

    //}

    

/*
var corArrayS2 = [corX=bug.corItemXS2,corY=bug.corItemYS2]
bug.elementCorS2.push(corArrayS2)
if(bug.elementCorS2.length>10){

 bug.elementCorS2.shift();
}
*/
///////////////////////////////////////////////////////////buraya kadar 
   //bug.butterflyYakalandi2 = 0;
}



bug.updatePosition = function (){

   

    var _element1Item =  map.getItemObjectPropertyFromCor(corItemBug1XNew,corItemBug1YNew);

    var _element2Item =  map.getItemObjectPropertyFromCor(corItemBug2XNew,corItemBug2YNew);
   
    //console.log(corItemXNew,corItemYNew)
    
    
    //map.getItemObjectPropertyFromCor(corItemXNew,corItemYNew);

    //console.log(bug.elementCorS1,val);

    
    


    if((_element1Item.canGo == 1 && _element1Item.needKey == 0 && _element1Item.canTake != 2 ) || _element1Item == 0 || _element1Item.type == 'butterfly'){
         
        //console.log(map.shift)
        

        if(_element1Item.type == map.getItemObjectPropertyFromId(1).type){
            //var butterflyItemProp = map.getItemObjectPropertyFromId(1); 
           // console.log(butterflyItemProp.life)
           map.getItemObjectPropertyFromId(1).life = 0;
           
          var audio = new Audio('sound/hurt.mp3');
            audio.play();
          
  
         // if(0 < butterflyItemProp.life < 10){
           // butterflyItemProp.life = 11;
         // }
          
          
          player.setButterflyLifeBar(map.getItemObjectPropertyFromId(1).life);

          //console.log("can: " + map.getItemObjectPropertyFromId(1).life)

        }
      //butterflyItem.parentElement.style.top = (corItemXNew-1)*32 + 'px';
      //this.bugItemSpider1.parentElement.animate({top:(corItemBug1XNew-1)*32 + 'px'},20000);
      //butterflyItem.parentElement.style.left = (corItemYNew-1)*32 + 'px';
      //this.bugItemSpider1.parentElement.animate({left:(corItemBug1YNew-1)*32 + 'px'},20000);

      //this.bugItemSpider1.parentElement.animate({easing: 'linear'},20000);
      //this.bugItemSpider1.parentElement.animate({duration: 20000});
      //this.bugItemSpider.parentElement.animate({direction: 'alternate',},2000);
    

      //butterflyItem.parentElement.style.top = (corItemBugXNew-1)*32 + 'px';
      //butterflyItem.parentElement.style.left = (corItemBugYNew-1)*32 + 'px';
     

      this.bugItemSpider1.parentElement.animate({duration: 500});
      this.bugItemSpider1.parentElement.style.top = (corItemBug1XNew-1)*32 + 'px';
      //this.bugItemSpider1.parentElement.animate({top:(corItemBug1XNew-1)*32 + 'px'},20000);
      this.bugItemSpider1.parentElement.style.left = (corItemBug1YNew-1)*32 + 'px';
      //this.bugItemSpider1.parentElement.animate({left:(corItemBug1YNew-1)*32 + 'px'},20000);

      this.bugItemSpider1.parentElement.animate({easing: 'linear'},500);
      
      bugItemSpider1.style.top = (corItemBug1XNew-1)*32 + 'px';
      bugItemSpider1.style.left = (corItemBug1YNew-1)*32 + 'px';
      //bugItemSpider1.animate({duration: 500});

      bug.corItemXS1 = corItemBug1XNew;
      bug.corItemYS1 = corItemBug1YNew;

      map.changeItemCor(bugItemSpider1.id-1,bug.corItemXS1,bug.corItemYS1);//1. spider ın koordınatlarını gunceller
      
      map.getItemObjectPropertyFromId(5).x = bug.corItemXS1;
      map.getItemObjectPropertyFromId(5).y = bug.corItemYS1;

      var corArrayS1 = [corX=bug.corItemXS1,corY=bug.corItemYS1]
      bug.elementCorS1.push(corArrayS1)
      if(bug.elementCorS1.length>10){

        bug.elementCorS1.shift();
      }


      

    }


    if((_element2Item.canGo == 1 && _element2Item.needKey == 0 && _element2Item.type != 'door' ) || _element2Item == 0 || _element2Item.type == 'butterfly' ){
        //console.log(_element2Item.type)
        
        if(_element2Item.type == map.getItemObjectPropertyFromId(1).type){
            //var butterflyItemProp = map.getItemObjectPropertyFromId(1); 
           // console.log(butterflyItemProp.life)
           map.getItemObjectPropertyFromId(1).life = 0;
           
          var audio = new Audio('sound/hurt.mp3');
            audio.play();
          
  
         // if(0 < butterflyItemProp.life < 10){
           // butterflyItemProp.life = 11;
         // }
          
          
          player.setButterflyLifeBar(map.getItemObjectPropertyFromId(1).life);

          console.log("can: " + map.getItemObjectPropertyFromId(1).life)

        }
      
        /*
          //butterflyItem.parentElement.style.top = (corItemXNew-1)*32 + 'px';
          this.bugItemSpider.parentElement.animate({top:(corItemBugXNew-1)*32 + 'px'},500);
          //butterflyItem.parentElement.style.left = (corItemYNew-1)*32 + 'px';
          this.bugItemSpider.parentElement.animate({left:(corItemBugYNew-1)*32 + 'px'},500);
    
          this.bugItemSpider.parentElement.animate({easing: 'linear'},500);
          this.bugItemSpider.parentElement.animate({direction: 'alternate',},500);
          //this.bugItemSpider.parentElement.animate({direction: 'alternate',},2000);
        */
    
          //butterflyItem.parentElement.style.top = (corItemBugXNew-1)*32 + 'px';
          //butterflyItem.parentElement.style.left = (corItemBugYNew-1)*32 + 'px';
        
          
          this.bugItemSpider2.parentElement.style.top = (corItemBug2XNew-1)*32 + 'px';
          this.bugItemSpider2.parentElement.style.left = (corItemBug2YNew-1)*32 + 'px';
    
          bugItemSpider2.style.top = (corItemBug2XNew-1)*32 + 'px';
          bugItemSpider2.style.left = (corItemBug2YNew-1)*32 + 'px';
    
    
    
          bug.corItemXS2 = corItemBug2XNew;
          bug.corItemYS2 = corItemBug2YNew;
    
          map.changeItemCor(bugItemSpider2.id-1,bug.corItemXS2,bug.corItemYS2);//2. spider ın koordınatlarını gunceller
      
          //map.getItemObjectPropertyFromId(7).x = bug.corItemXS2;
          //map.getItemObjectPropertyFromId(7).y = bug.corItemYS2;
          //console.log(bug.corItemXS1,bug.corItemYS1)
    
        }



};


//eger kelebek yakında ise o zmaan kelebegın koordinatına gore hareket edecek, rassal hareket etmeyecek.
/*
var val = [map.getItemObjectCorFromIdX(1),map.getItemObjectCorFromIdY(1)];
     
     
     var sval = val.join("-");
     for(var i = bug.elementCorS1.length; bug.elementCorS1 >= 0; i--)
     {
         var sar = bug.elementCorS1[i].join("-");
         if (sar == sval) 
         {
            bug.butterflyYakalandi1 = 1;
            
           console.log("kelebek burda: " +bug.elementCorS1[i][0],bug.elementCorS1[i][1],map.getItemObjectCorFromIdX(5),map.getItemObjectCorFromIdY(5))
           
           bug.elementCorS1[i][0]>map.getItemObjectCorFromIdX(5) 

        }
     
    }

    //////////////////////////////////////////
    var val = [map.getItemObjectCorFromIdX(1),map.getItemObjectCorFromIdY(1)];
     
     
    var sval = val.join("-");
    for(var i = bug.elementCorS1.length; bug.elementCorS1 >= 0; i--)
    {
        var sar = bug.elementCorS1[i].join("-");
        if (sar == sval) 
        {
           bug.butterflyYakalandi1 = 1;
           
          console.log("kelebek burda: " +bug.elementCorS1[i][0],bug.elementCorS1[i][1],map.getItemObjectCorFromIdX(5),map.getItemObjectCorFromIdY(5))
          
          //bug.elementCorS1[i][0]>map.getItemObjectCorFromIdX(5) 

       }
    
   }
*/
   