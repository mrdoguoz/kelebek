/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function level(){};



var maxX = 26
var maxY = 14
//standart kenar duvarlarının oluşturulması
level.createWall = function(){
    //genel olarak map.add yerine map.result getirdim
    map.add("butterfly",5,3,{})
    map.add("key",13,13,{})
    map.add("fake",5,25,{})
    map.add("door",5,26,{})
    map.add("spider",12,2,{})//id=5
    map.add("bee",12,17,{})//id=6
    map.add("spider",3,21,{})//id=7
    map.add("bee",7,12,{})//id=8
    //bug.createBugElement("bug2",4,12,13)

    for (var i = 1; i <= maxX; i++ ){


        map.add("wall1",1,i,{})
        map.add("wall1",maxY,i,{})
       

    }

    for (var i = 2; i < maxY; i++ ){

        map.add("wall1",i,1,{})
        map.add("wall1",i,maxX,{})
        //map.add("wall1",12,1,{})
        //map.add("wall1",11,1,{})
    }

   
    
}
//numarası verilen levelı oluşturur
level.createLevel = function($levelNum){
    
    
    
    level.createWall();

    var ustDuvar = parseInt(Math.random()*3)
    for (var i = 2; i <= 4; i++ ){

        map.add("wall2",i,ustDuvar+10,{})

    }

    for(var i = 6; i <= 10; i++ ){

        map.add("wall2",5,ustDuvar+16-i,{})

    }
    
    var solyatayDuvar = parseInt(Math.random()*3)

    for (var i = 2; i<=5; i++){

        map.add("wall2",solyatayDuvar+8,i,{})

    }

    //alt duvar
    var ustDuvar = parseInt(Math.random()*3)
    for (var i = 11; i < maxY; i++ ){

        map.add("wall2",i,ustDuvar+10,{})

    }

    for(var i = 6; i <= 11; i++ ){

        map.add("wall2",10,ustDuvar+21-i,{})

    }

    var sagyatayDuvar = parseInt(Math.random()*3)

    for (var i = 20; i<maxX; i++){

        map.add("wall2",sagyatayDuvar+6,i,{})

    }

    
    for (var i = 4; i < 7; i++ ){

        map.add("wall2",sagyatayDuvar+i,19,{})

    }

    for( var i = 1; i < 7; i++){
        
        map.add("enter",14,14,{})
        map.add("trap",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{});
        
    }

    for( var i = 1; i < 25; i++){
        
        map.add("apple",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{foodValue: 10 + Math.round(Math.random()*10)});
        map.add("flower",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{foodValue: Math.round(Math.random()*10) });    
        map.add("rock",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{}); 
        map.add("grass",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{});
        map.add("tree1",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{});
        map.add("tree2",parseInt(Math.random()*maxY),parseInt(Math.random()*maxX),{});
        
    
        }

        

    
    
};  
