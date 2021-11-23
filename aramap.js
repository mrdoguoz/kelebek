function map(){};

map.init = function(){



};

var elementId = 0;


var _elementItemArray = [];//ekleme fonksiyonundaki butun ozellikleri taşır
var corItemArray = [];//ekleme fonksiyonundaki sadece koordinatları taşır

var corX = -1;
var corY = -1;

map.elementData = [];
map.corId = {};
map.idCorX = {};
map.idCorY = {};
map.corType = {};

map.idType = {};
 
map.shift = 0;

map.add = function($type,$x,$y,$param){

    //alert($param.foodValue)

    

    var yakalandi = 0;    
     
     var val = [$x,$y];
     
     
     var sval = val.join("-");
     for(var i in corItemArray)
     {
         var sar = corItemArray[i].join("-");
         if (sar == sval) 
         {
            yakalandi = 1;
            
            return corItemArray[i]
        }
     
    }

    /*
    if ($type == 'wall1' && $x == 11 && $y==1) 
         {
             yakalandi = 0;
        }else if($type == 'wall1' && $x == 12 && $y==1)
        {
             yakalandi = 0;
        }else yakalandi;
    */

        if(yakalandi == 0){
            elementId++;

            var _elementItem = map.createElementItemProperty($type);
            
            
            //_elementItem.foodValue = $param.foodValue;

            //console.log(_elementItem.foodValue)

            var _objectsContainer = document.getElementById('objectsContainer')

            var _itemDiv = document.createElement('div');


            _itemDiv.setAttribute('class', 'objectsStyle');
            _itemDiv.style.setProperty("top", ($x-1)*32 + "px");
            _itemDiv.style.setProperty("left", ($y-1)*32 + "px");

            var _itemImg = document.createElement('img');
            //_itemImg.setAttribute("src", "asset/" + $type + ".png");
            _itemImg.setAttribute("src", _elementItem.activeSrc);            
            _itemImg.setAttribute("id", elementId); 
            _itemImg.setAttribute("class",_elementItem.type)

            
            
                
            _itemDiv.appendChild(_itemImg);

            ////////////////
            if($param.foodValue > 0){
               
                _elementItem.foodValue = $param.foodValue;
                //alert(_elementItem.foodValue)
                
            }

            if(_elementItem.foodValue > 0){
                var itemFoodValue= document.createElement("div");
                itemFoodValue.textContent= _elementItem.foodValue;
                itemFoodValue.classList="foodValue";
                itemFoodValue.style.position = "absolute";
                itemFoodValue.style.bottom = "0px";
                itemFoodValue.style.right = "0px";
                _itemDiv.appendChild(itemFoodValue);
            
            }
                ////////////////

            _objectsContainer.appendChild(_itemDiv);

            
            var itemArray = [type=$type,corX=$x,corY=$y,id=elementId,param=$param]
            //itemArray.push({type:$type, corX:$x, corY:$y, id:elementId, paramElementItem:{}});

            _elementItemArray.push(itemArray)
        //};

            //console.log(itemArray);  
            //////////////////////////////////////  
            map.changeItemCor = function($index,$x,$y){//hareketli nesnelerin koordinatları guncellenir

                _elementItemArray[$index][1] = $x;
                _elementItemArray[$index][2] = $y;
                //console.log(_elementItemArray[4][0],_elementItemArray[4][1],_elementItemArray[4][2])
               
                //map.elementData[$index][1] = $x;
                //map.elementData[$index][2] = $y;
                map.elementData[$index].x = $x;
                map.elementData[$index].y = $y;
                
                //console.log(map.elementData)   
                //console.log(_elementItemArray[4][0],_elementItemArray[4][1],_elementItemArray[4][2],map.elementData[4][1],map.elementData[4][2])

                map.idCorX[$index+1] = $x;
                map.idCorY[$index+1] = $y;

                //console.log(map.elementData[3].x,map.elementData[3].y,map.elementData[3].id,map.getItemObjectIdFromCor(5,26))
                

                //console.log(map.elementData)
                

                //map.corId["x"+$x+"y"+$y] = $index+1;
                //map.corType["x"+$x+"y"+$y] = $type; yapayım mı??????????????????

                /*
                console.log(map.elementData[4][1],map.elementData[4][2],map.idCorX[5],map.idCorY[5])
                console.log(map.getItemObjectPropertyFromId(5).x,map.getItemObjectPropertyFromId(5).y,map.getItemObjectPropertyFromId(5).type,map.getItemObjectPropertyFromId(5).damage)
                */
            }
            
            //////////////////////////////////////

            _elementItem.type = $type;
            _elementItem.x = $x;
            _elementItem.y = $y;
            _elementItem.id = elementId;

            //alert($param.foodValue)
           

           //alert(_elementItem.foodValue)

            //if(elementId != 1 && elementId != 5 && elementId != 6 && elementId != 7 && elementId != 8){
            
            map.corId["x"+$x+"y"+$y] = elementId;
            
            //}
            
            map.corType["x"+$x+"y"+$y] = $type;
            map.idCorX[elementId] = $x;
            map.idCorY[elementId] = $y;
            map.idType[elementId] = $type;

            map.elementData.push(_elementItem);
            

            //console.log(_elementItem.type,_elementItem.id,_elementItem.x,_elementItem.y)
           

            map.result();
        
        }else{
           // console.log($x,$y,yakalandi)

        }


        
        
        //console.log(_elementItemArray.id,_elementItemArray.corX,_elementItemArray.corY)
    
};

//map.corId['x5y3']= 900;



//console.log(map.corId)

//console.log(map.corId)

//console.log(map.corId.)
//x5y3

//ÇALIŞIYOR: 
map.result = function(){_elementItemArray.find
            
    (function(elaman, index, dizi) {
  
    
        //console.log(type,corX,corY,id)
 
 //---------------------------------------------------
    corItemArray.push([corX,corY])
 
    return type,corX,corY,id,corItemArray
    

    });
    
    
    //console.log(_elementItemArray)

}




map.getItemObjectPropertyFromCor = function($x,$y){

    var _itemId = map.getItemObjectIdFromCor($x,$y);
    
    return map.getItemObjectPropertyFromId(_itemId);
    

}


map.getItemObjectIdFromCor = function($x,$y){

   //console.log(map.elementData)

    /*
    if(map.corId["x"+$x+"y"+$y] > 0) return map.corId["x"+$x+"y"+$y];

    else return 0;
    */
     

     
     var sval2 = $x+'-'+$y;
     
     if(map.shift == 1){

        for(var i = 1; i < map.elementData.length; i++)
     {
         var sar2 = map.elementData[i].x+'-'+map.elementData[i].y;

         //console.log(sval2,sar2)

         if (sar2 == sval2) 
         {
            
            return map.elementData[i].id
        }
     
    }


     }else{
     
        for(var i in map.elementData)
        {
            var sar2 = map.elementData[i].x+'-'+map.elementData[i].y;

            
            //console.log(sval2,sar2)

            if (sar2 == sval2) 
            {
                
                return map.elementData[i].id
            }
        
        }
    }
    
    /*
    for(i = 0; i < map.elementData.length; i++){

        

        //alert(map.elementData[i].x == $x && map.elementData[i].y == $y)
        
        if(map.elementData[i].x == $x && map.elementData[i].y == $y){
       
       
        //if(map.elementData[i].x == $x){
           //return i;
           return map.elementData[i].id
        }else return 0;
    }//buraya kadar
    
    */

}




//id den koordinat bulma çalışmıyordu artık çalışıyor
map.getItemObjectCorFromIdX = function($id){

     return map.idCorX[$id]; 
     
}

map.getItemObjectCorFromIdY = function($id){

    return map.idCorY[$id]; 
    
}

map.changeItemImage = function($id){

    var changedElement = document.getElementById($id)

    if(map.getItemObjectPropertyFromId($id).passiveSrc){
    changedElement.src = map.getItemObjectPropertyFromId($id).passiveSrc;
    }
    //console.log(changedElement.parentElement.getElementsByClassName("foodValue")[0].textContent)


    if(changedElement.parentElement.getElementsByClassName("foodValue")[0])
    changedElement.parentElement.getElementsByClassName("foodValue")[0].textContent = "0";

   
}



map.getItemObjectPropertyFromId = function($id){

    //console.log($id);

    console.log(map.elementData)

    var indexItem = 7000;

    for(i = 0; i < map.elementData.length; i++){

        if(map.elementData[i].id == $id){

            indexItem = i;

            //console.log($id,indexItem);
        }
    }

    if(indexItem == 7000) {
        return 0;
    }else {
        return map.elementData[indexItem]
    }

    
    

}




map.createElementItemProperty = function($type){

    var _elementItem = {};

    switch($type) {
        case 'apple':

            _elementItem.type = "apple";
            _elementItem.canEat = 1;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 15;
            _elementItem.activeSrc = "asset/apple.png";
            _elementItem.passiveSrc = "asset/apple.passive.png";
            _elementItem.id = 0;


            break;
        case 'flower':
            _elementItem.type = "flower";
            _elementItem.canEat = 1;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 10;
            _elementItem.activeSrc = "asset/flower.png"
            _elementItem.passiveSrc = "asset/flower.passive.png";
            _elementItem.id = 0;

            break;

        case 'grass':
            _elementItem.type = "grass";
            _elementItem.canEat = 0;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/grass.png";
            _elementItem.id = 0;
           

            break;
        

        case 'rock':
            _elementItem.type = "rock";
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/rock.png";
            _elementItem.id = 0;

            break;

        case 'tree1':
            _elementItem.type = "tree1";
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/tree1.png";
            _elementItem.id = 0;

            break;

        case 'tree2':
            _elementItem.type = "tree2";
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.needKey = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/tree2.png";
            _elementItem.id = 0;
            
            break;
        
        case 'trap':
            _elementItem.type = "trap";
            _elementItem.canEat = 0;
            _elementItem.canGo = 1;
            _elementItem.damage = 20;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/trap.png";
            _elementItem.passiveSrc = "asset/trap.passive.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
            
            break;

        case 'wall1':
            _elementItem.type = "wall1";
            _elementItem.id = 0;
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/wall1.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
            
            break;

        case 'wall2':
            _elementItem.type = "wall2";
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/wall2.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
                
            break;

        case 'butterfly':
            _elementItem.type = "butterfly";
            _elementItem.canEat = 0;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.foodValue = 0;
            _elementItem.activeSrc = "asset/butterfly.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
            _elementItem.life = 20;
                
            break;

        case 'key':
            _elementItem.type = "key";
            _elementItem.canEat = 0;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.activeSrc = "asset/key.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
            _elementItem.life = 0;
            _elementItem.canTake = 1;
                
            break;

        case 'fake':
            _elementItem.type = "fake";
            _elementItem.canEat = 0;
            _elementItem.canGo = 1;
            _elementItem.damage = 0;
            _elementItem.activeSrc = "asset/enter.png";
            _elementItem.needKey = 0;
            _elementItem.id = 0;
            _elementItem.life = 0;
            _elementItem.canTake = 0;
                
            break;

        case 'door':
            _elementItem.type = "fake";
            _elementItem.canEat = 0;
            _elementItem.canGo = 0;
            _elementItem.damage = 0;
            _elementItem.activeSrc = "asset/door.png";
            _elementItem.passiveSrc = "asset/door.passive.png";
            _elementItem.needKey = 1;
            _elementItem.id = 0;
            _elementItem.life = 0;
            _elementItem.canTake = 0;

                
            break;

        case 'spider':

            _elementItem.type = "spider";
            _elementItem.damage = 100;
            _elementItem.canGo = 1;
            _elementItem.activeSrc = "asset/spider.png";
            _elementItem.passiveSrc = "asset/trap.passive.png";
            _elementItem.id = 0;
            _elementItem.life = 100;


            break;

        case 'bee':
            _elementItem.type = "bee";
            _elementItem.damage = 100;
            _elementItem.activeSrc = "asset/bee.png";
            _elementItem.id = 0;
            _elementItem.life = 100;
            break;

    }
    return _elementItem;
}

//map.add("apple",160,160,{});

