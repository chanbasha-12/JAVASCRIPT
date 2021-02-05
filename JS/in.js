//    var container=document.querySelector("#root");
//    var card=document.createElement("div");
//   card.setAttribute("id0","card");
//    container.appendChild(card);
//   var image=document.createElement("img");
//   image.src="pictures/img.png";
//    image.alt="male";
//   image.style.width="20%";
//   card.appendChild(image);
//    document.write("<h1>SK CHANBASHA</h1>");
//   document.write("<h2>SKCHANBASHA1111@gmail.com</h2>");
//  document.write("<h2>computer science engineering</h2>");
//  function myfunction(){
//      document.write("succcesssss");
//  }
 //* normal function*//

// 
// function loadJSON(file,callback){
//     ajax=new XMLHttpRequest();
//     ajax.overrideMimeType("application/json");
//     ajax.open("GET",file,true);
//      ajax.onreadystatechange=function(){
//            if(ajax.readyState===4 && ajax.status===200) {
//                callback(ajax.responseText);
//            }
//        }
//        ajax.send();
//   }
// loadJSON("JS/data.json",function(text){
//     var d=JSON.parse(text);
//        console.log(d);
// });

var loadJSON=(file,callback)=>{
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=()=>{
           if(ajax.readyState===4 && ajax.status===200) {
               callback(ajax.responseText);
           }
       }
       ajax.send();
  }
loadJSON("JS/data.json",loadJSON=(text)=>{
    var d=JSON.parse(text);
       details(d.details);
       other1(d.multipledata);
});
var root=document.getElementById("root");
function details(cse){
    var ch=document.createElement("h1");
    ch.setAttribute("class","name");
    ch.textContent=cse.name;
    root.appendChild(ch);
    var b=document.createElement("h2");
    b.setAttribute("class","mobile");
    b.textContent=cse.mobile;
    root.appendChild(b);
    var ba=document.createElement("h3");
    ba.setAttribute("class","branch");
    ba.textContent=cse.branch;
    root.appendChild(ba);
    var image=document.createElement("img");
       image.src="pictures/img.png";
           image.alt="male";
   image.style.width="20%";
     root.appendChild(image);
}
function other1(r){
    var ul=document.createElement("ul");
    root.appendChild(ul);
    for (let i=0;i<r.length;i++){
           var li=document.createElement("li");
           li.textContent=r[i].name;
           ul.appendChild(li);
   
    }
} 