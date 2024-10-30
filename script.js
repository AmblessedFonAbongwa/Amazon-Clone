const imgs=document.querySelectorAll(".headerpic ul img");
const leftman=document.getElementById("left");
const rightmanman=document.getElementById("right");
let n=0;
function movethem(){
    for(let i=0; i < imgs.length; i++ ){
        imgs[i].style.display='none';

    }
    imgs[n].style.display='block';
}
movethem();
leftman.addEventListener("click", (eman)=> {
if(n>0){
    n--
}
else{n= imgs.length-1}
movethem()
});
rightmanman.addEventListener("click", (eman)=> {
if(n<imgs.length-1){
    n++
}
else{n=0}
movethem()
});

let flow=document.querySelector(".flowproducts");
   
    flow.addEventListener("wheel", (event) => {
    event.preventDefault();
    flow.scrollLeft += event.deltaY;
    flow.style.scrollBehavior="auto"
     });

let man=document.querySelector(".flowproductman");

   man.addEventListener("wheel",(event)=>{
      event.preventDefault(); man.scrollLeft += event.deltaY;
    });
let gril=document.getElementById("flowg");

   gril.addEventListener("wheel",(event)=>{
      event.preventDefault(); gril.scrollLeft += event.deltaY;
    });

 
        const him=document.getElementById("show");
        const her=document.getElementById("headman");
        const out=document.getElementById("hide");
function hid(){
    her.style.left="-200px";
    him.style.display="block";
    out.style.display="none"
    out.style.cursor="pointer"
}
function show(){
    her.style.left="0.1px"
    him.style.display="none";
    out.style.display="block"
    him.style.cursor="pointer"

}


const text=document.getElementById("text");
const elementss=document.getElementsByClassName("elements");
const up=document.getElementById("up");
const element=document.getElementById("elements");

for(elements of elementss){
    elements.onclick=function(){
        text.innerHTML=this.textContent;
        element.classList.toggle("element");
        up.classList.toggle("rotate")
    }
}
up.onclick=function(){
    element.classList.toggle("element");
    up.classList.toggle("rotate")
}

const dropp=document.getElementById("drop")
const langues=document.getElementsByClassName("langue")
const language=document.getElementById("language")
const lan=document.getElementById("lang")

for(langue of langues){
    langue.onclick=function(){
        lan.innerHTML=this.textContent;
        language.classList.toggle("conts")  
    }
}
dropp.onclick=function(){
    language.classList.toggle("conts")
  
}

