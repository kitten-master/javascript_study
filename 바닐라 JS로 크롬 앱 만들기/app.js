const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    h1.style.color="blue";
}
function handleMouseEnter(){
    h1.innerText="mouse is here";
}
function handleMouseLeave(){
    h1.innerText="mouse is leave";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier");
}
function handleWindowOffline(){
    alert("no wifi");
}
function handleWindowOnline(){
    alert("good");
}
h1.addEventListener("click",handleh1Click);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
