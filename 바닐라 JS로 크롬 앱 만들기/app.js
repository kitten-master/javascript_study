const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    const currentColor = h1.style.color;
    let nowColor;
    if(currentColor === "blue"){
        nowColor = "tomato";
    }
    else{
        nowColor = "blue";
    }
    h1.style.color = nowColor;
}

h1.addEventListener("click",handleh1Click);
 
