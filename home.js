document.querySelectorAll(".go-icon")[5].addEventListener("click", ()=>{
    document.getElementById("left-pane").style.display = "none";
    document.getElementById("left-pane-hidden").style.display = "block";
});

document.querySelectorAll(".go-icon")[6].addEventListener("click", ()=>{
    document.getElementById("left-pane-hidden").style.display = "none";
    document.getElementById("left-pane").style.display = "block";
});

var upChevron = document.querySelector("#upChevron");
var downChevron = document.querySelector("#downChevron");
var msgContent = document.querySelectorAll(".msg-content");

upChevron.addEventListener("click", ()=>{
    upChevron.style.display = "none";
    downChevron.style.display = "inline";
    for(let i=0; i<msgContent.length; i++){
        msgContent[i].style.display = "block";
    }
});

downChevron.addEventListener("click", ()=>{
    downChevron.style.display = "none";
    upChevron.style.display = "inline";
    for(let i=0; i<msgContent.length; i++){
        msgContent[i].style.display = "none";
    }
});

var inputText = document.querySelector("#what-happen").querySelectorAll("input")[0];

var tweetBtn = document.querySelector("#send-tweet");
var postValue = inputText.value;
var createPost = document.querySelectorAll(".post")[0];

tweetBtn.addEventListener("click", ()=>{
    if(postValue != ""){
        createPost.querySelectorAll(".post-text")[0].innerText = postValue;
        createPost.style.display = "block"
    }
});

