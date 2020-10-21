alert("Fait par Pika#8509 Game Version: 1.1.1")
var x=0;
var lv=1;
var at=1;
function oncl(){
   x+=lv;
   textUpdate();
    
}

function textUpdate(){
    document.getElementById("p").innerHTML=x+" points"
}

function autoclick(){
	switch (at) {
		case 1:
		if (x>=150){
			at++;
			x-=150;  document.getElementById("g").innerHTML= "cost:250| Upgrade";
			setInterval(oncl, 1000);
		}
		break;
		case 2:
		if (x>=250){
			at=3;
			x-=200;  document.getElementById("g").innerHTML= "cost:550| Upgrade";
		}
		break;
		case 3:
		if (x>=550){
			at=5;
			x-=550;  document.getElementById("g").innerHTML= "cost:??| Fully Upgrade";
		}
		break;
	}
}

function upgrade(){
   switch (lv) {
      case 1:
      if (x>=100){
         lv++;
         x-=100;   document.getElementById("u").innerHTML= "cost: 200| Upgrade";
      }
     break;
     case 2:
   
   if (x>=200){
         lv=3;
         x-=200;   document.getElementById("u").innerHTML= "cost: 500| Upgrade";
}
      break;
	  case 3:

	if (x>=500){
		lv=5;
		x-=500;    document.getElementById("u").innerHTML= "Fully Upgrade"
	}
}
}
