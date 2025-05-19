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