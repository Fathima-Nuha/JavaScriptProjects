const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function HexCode() {
var hexCode = '#' 
    for (var i = 0; i < 6; i++) {
        let randNumber = Math.floor(Math.random() * 16);

       hexCode = hexCode + hex[randNumber].toString();
    }
    return hexCode;
}

var clickMe=document.getElementsByClassName("btn-hero")[0];
clickMe.addEventListener("click",function(){
    hexCode=HexCode();
    document.getElementById("color").innerHTML=hexCode;
    document.body.style.background=hexCode;
})