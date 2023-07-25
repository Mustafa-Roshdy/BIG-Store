var nameRegEx=/^[a-z ,.'-]+$/i
var emailRegEX=/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i
function outPut(){
    var userName=document.getElementById("name").value
    if(nameRegEx.test(userName)==false){
        document.getElementById("name").style.borderBottomColor="red"
        document.getElementById("name").style.color = "red";
    }
    else{
        document.getElementById("name").style.color = "black";
        document.getElementById("name").style.borderBottomColor="black"
    }
}

function outEmail(){
    var userEmail=document.getElementById("email").value
    if(emailRegEX.test(userEmail)==false){
        document.getElementById("email").style.borderBottomColor="red"
        document.getElementById("email").style.color = "red";
    }
    else{
        document.getElementById("email").style.color = "black";
        document.getElementById("email").style.borderBottomColor="black"
    }
}