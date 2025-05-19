let NextBut = document.getElementById("next");
let PrevBut = document.getElementById("prev");
let curentPos = 0;
let max = 900;

NextBut.addEventListener("click",()=>{
    if(curentPos < max){
        curentPos += 85;
        document.querySelector(".con4-inner").style.transform += "translateX(-180px)"
        document.querySelector(".con4-inner").style.transition = "all .3s ease-in-out"
    }
})

PrevBut.addEventListener("click",()=>{
    if(curentPos > 0){
        curentPos -= 85;
        document.querySelector(".con4-inner").style.transform += "translateX(180px)"
        document.querySelector(".con4-inner").style.transition = "all .3s ease-in-out"
    }
})