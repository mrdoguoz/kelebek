function butterFlyGame(){}

butterFlyGame.init = function(){



    level.createLevel();
    //player.init();

    animate.init();
    player.init();
    bug.init();
////////77
    //animate.moveObjectFindCor("butterfly");

    //animate.moveObject("butterfly",5,3);
////////////7
    /*
    var _elementItem = map.getItemObjectPropertyFromCor(5,3);
    alert(_elementItem.type);
    alert(_elementItem.id);
    alert(_elementItem.canGo);
    alert(_elementItem.canEat);
    alert(_elementItem);
    */
    /*
    var x = map.getItemObjectIdFromCor(1,1)

    alert(x);

    var y = map.getItemObjectCorFromId(x)

    alert(y);

*/
    
    
    //str.substr(11, 1);
  

    
    //console.log(parseInt(Math.random()*maxX))

    //map.add("rock",3,3,{});
  
    //map.add("flower",5,5,{});

   // player.refresh()
   
//console.log(map.getItemObjectCorFromIdY(1),map.getItemObjectCorFromIdX(1))
//console.log(map.idCorX[1])

};



//butterFlyGame.init();
window.addEventListener('load',butterFlyGame.init,false);
