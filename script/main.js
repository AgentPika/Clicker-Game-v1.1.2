alert("The game is in development. Game version: 1.1.3");
//variable
var x=0;
var lv=1;
var at=1;
var at2=1;

function oncl(){
   x+=lv;  
   textUpdate();
   console.log(x);  
}

function textUpdate(){
    document.getElementById("p").innerHTML=x+" points"
}