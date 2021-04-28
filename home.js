document.querySelectorAll(".go-icon")[5].addEventListener("click", ()=>{
    document.getElementById("left-pane").style.display = "none";
    document.getElementById("left-pane-hidden").style.display = "block";
});

document.querySelectorAll(".go-icon")[6].addEventListener("click", ()=>{
    document.getElementById("left-pane-hidden").style.display = "none";
    document.getElementById("left-pane").style.display = "block";
});

