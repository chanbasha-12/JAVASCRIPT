fetch("JS/data.json")
.then(res=>{return res.json()})
.then(d=>{
    details(d.details);
       other1(d.multipledata);
})
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
           li.setAttribute("class","bg-danger");
           ul.appendChild(li);
           var li1=document.createElement("li");
           li1.textContent=r[i].mobile;
           li1.setAttribute("class","bg-success");
           ul.appendChild(li1);
          
    }

} 
