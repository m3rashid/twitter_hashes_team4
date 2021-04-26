var div1 = document.getElementById("firstDiv");
var div2 = document.getElementById("secondDiv");
var email = document.getElementById("emailInstead");

div1.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div1.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div1.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div1.style.borderColor = "#ffffffde";
    }, 3000);
});       

div2.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div2.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div2.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div2.style.borderColor = "#ffffffde";
    }, 3000);
});

email.addEventListener("click", ()=>{
    if(div1.getElementsByTagName("p")[0].innerText == "Phone"){
        email.innerText = "Use Phone Instead";
        div1.getElementsByTagName("p")[0].innerText = "Email";
        div1.getElementsByTagName("input")[0].setAttribute("type", "email");
        div1.getElementsByTagName("input")[0].setAttribute("placeholder", "Email");
    }else{
        email.innerText = "Use Email Instead";
        div1.getElementsByTagName("p")[0].innerText = "Phone";
        div1.getElementsByTagName("input")[0].setAttribute("type", "number");
        div1.getElementsByTagName("input")[0].setAttribute("placeholder", "Phone");;   
    }
    
    
    
});
        