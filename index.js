var div1 = document.getElementById("firstDiv");
var div2 = document.getElementById("secondDiv");

div1.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div1.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div1.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div1.style.borderColor = "#ffffffde";
    }, 1500);
});       

div2.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div2.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div2.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div2.style.borderColor = "#ffffffde";
    }, 1500);
});