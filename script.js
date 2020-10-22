alert("The game is in development. Game version: 1.1.2");
//variable
var x=0;
var lv=1;
var at=1;
var at2=1;
//oncl quand le joueur click
function oncl(){
   x+=lv;  
   textUpdate();
   console.log(x);
    
}
//update les points
function textUpdate(){
    document.getElementById("p").innerHTML=x+" points"
}
//generator ou autoclick
function autoclick(){
	switch (at) {
		case 1:
		if (x>=150){
			at++;
			x-=150;  document.getElementById("g").innerHTML= "cost:250| Generator lv: 2";
			//fait en sorte de clicker chaque 1 seconde
			setInterval(oncl, 1000);
		}
		break;
		case 2:
		if (x>=250){
			at=3;
			x-=200;  document.getElementById("g").innerHTML= "cost:550| Generator lv: 3";
		}
		break;
		case 3:
		if (x>=550){
			at=5;
			x-=550;  document.getElementById("g").innerHTML= "cost:??| Fully Upgrade lv: 4";
		}
		console.log(at);
		break;
	}
}
//generator ou autoclick num2
function autoclick2(){
	switch (at2) {
		case 1:
		if (x>=300){
			at2=3;
			x-=300;  document.getElementById("g2").innerHTML= "cost: 450| Generator 2  lv: 2"
			setInterval(oncl, 1000);
		}
		break;
		case 2:
		if (x>=450){
			at2=4;
			x-=450;  document.getElementById("g2").innerHTML= "cost: 700| Generator 2 lv: 3"
		}
		break;
		case 3:
		if (x>=700){
			at2=6;
			x-=700;  document.getElementById("g2").innerHTML= "cost: ??| Fully Upgrade lv: 4"
		}
		console.log(at2);
		break;
	}
}
//ameliore les clicks du joueur
function upgrade(){
   switch (lv) {
      case 1:
      if (x>=100){
         lv++;
         x-=100;   document.getElementById("u").innerHTML= "cost: 200| Upgrade lv: 2";
      }
     break;
     case 2:
   
   if (x>=200){
         lv=3;
         x-=200;   document.getElementById("u").innerHTML= "cost: 500| Upgrade lv: 3";
}
      break;
	  case 3:

	if (x>=500){
		lv=5;
		x-=500;    document.getElementById("u").innerHTML= "cost:??| Fully Upgrade lv: 4";
	}
}
}
