//   var container=document.querySelector("#root");
//   var card=document.createElement("div");
//  card.setAttribute("id0","card");
//   container.appendChild(card);
//  var image=document.createElement("img");
//  image.src="pictures/img.png";
//   image.alt="male";
//  image.style.width="20%";
//   card.appendChild(image);
//   document.write("<h1>SK CHANBASHA</h1>");
//   document.write("<h2>SKCHANBASHA1111@gmail.com</h2>");
//   document.write("<h2>computer science engineering</h2>");

 function loadJSON(file,callback){
     var ajax=new XMLHttpRequest();
     ajax.overrideMimeType("application/json");
     ajax.open("GET",file,true);
      ajax.onreadystatechange=function(){
            if(ajax.readyState===4 && ajax.status===200) {
                callback(ajax.responseText);
            }
        }
        ajax.send();
 }
 loadJSON("data.json",function(text){
     var d=JSON.parse(text);
        console.log(d);
 });
