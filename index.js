var div1 = document.getElementById("firstDiv");
var div2 = document.getElementById("secondDiv");
var email = document.getElementById("emailInstead");

div1.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div1.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div1.getElementsByTagName("input")[0].setAttribute("placeholder", "");
    div1.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div1.style.borderColor = "#ffffffde";
    }, 3000);
});       

div2.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    div2.getElementsByTagName("p")[0].style.color = "rgba(0, 191, 255)";
    div2.getElementsByTagName("input")[0].setAttribute("placeholder", "");
    div2.style.borderColor = "rgba(0, 191, 255)";
    setTimeout(()=>{
        div2.style.borderColor = "#ffffff80";
    }, 3000);
});

email.addEventListener("click", ()=>{
    var inp = div1.getElementsByTagName("input")[0];

    if(div1.getElementsByTagName("p")[0].innerText == "Phone"){
        email.innerText = "Use Phone Instead";
        div1.getElementsByTagName("p")[0].innerText = "Email";
        inp.setAttribute("type", "email");
        inp.setAttribute("placeholder", "Email");
    }
    else{
        email.innerText = "Use Email Instead";
        div1.getElementsByTagName("p")[0].innerText = "Phone";
        inp.setAttribute("type", "number");
        inp.setAttribute("placeholder", "Phone");;   
    }  
});
        
document.getElementById("signup").addEventListener("click", ()=>{
    window.location.href = "home.html";
});