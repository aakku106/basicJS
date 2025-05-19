const anotherBtn = document.getElementById("anotherBtn")
var btn;
anotherBtn.onclick = function(){
    alert('weeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    prompt('hwhwhehwh')
    console.log("clicked heheheh")
}
anotherBtn.onmouseleave = function(){
    alert("leavedddddddd")
    var iss = confirm("did you leave button ???")
    if(iss){
        btn= "weeeee its moved outtt !!!!!!!"

    }
    else{
        btn ='meehh i know you leaved dont lie'
    }
    document.getElementById("btn").innerHTML=btn;
}

//-------------------------------------------------------------------------------------//

const touchBtn = document.getElementById("touchBtn")
var TBtn="🫩"
touchBtn.onmouseenter = function(){
    TBtn="shuuu shuuu get away don't hover me 😡";
    document.getElementById("TBtnFill").innerHTML=TBtn;
    document.getElementById("touchBtn").style.background="rgba(193, 44, 91, 0.622)";
    document.getElementById("TBtnFill").style.color="rgb(3, 122, 234)";
}
touchBtn.onclick = function(){
    TBtn="😑 i sayed get awwayy dont click 🤬";
    document.getElementById("TBtnFill").innerHTML=TBtn;
    document.getElementById("touchBtn").style.background="rgba(224, 0, 71, 0.7)";
    document.getElementById("TBtnFill").style.color="rgb(31, 245, 195)";
}
touchBtn.onmouseleave = function(){
    TBtn="🫨";
    document.getElementById("TBtnFill").innerHTML=TBtn;
    document.getElementById("touchBtn").style.background="rgba(224, 119, 0, 0.4)";
    document.getElementById("TBtnFill").style.color="rgb(245, 31, 181)";
}
touchBtn.ondblclick = function(){
    TBtn="wait i kind of like it 🫠";
    document.getElementById("TBtnFill").innerHTML=TBtn;
    document.getElementById("touchBtn").style.background="rgba(32, 135, 239, 0.69)";
    document.getElementById("TBtnFill").style.color="rgba(181, 245, 31, 0.69)";
}
let pressTimer;

touchBtn.onmousedown = function(){
    pressTimer = setTimeout(() => {
        TBtn = "awwwww 💢";
        document.getElementById("TBtnFill").innerHTML = TBtn;
        document.getElementById("touchBtn").style.background = "rgba(239, 32, 32, 0.82)";
        document.getElementById("TBtnFill").style.color = "rgba(31, 245, 81, 0.79)";
    }, 400); 
}

touchBtn.onmouseup = function(){
    clearTimeout(pressTimer); 
}
document.getElementById("TBtnFill").innerHTML=TBtn;
