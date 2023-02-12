const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


var clickME = document.getElementsByClassName("btn-hero")[0];
document.addEventListener("click", function () {
    let randNumber = Math.floor(Math.random() * 4);
    let newColor = colors[randNumber];
    document.getElementById("color").innerHTML = newColor;
    document.body.style.backgroundColor = newColor;

})
