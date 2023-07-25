var images=["../../images/slideBar/meta-store.png","../../images/slideBar/Gaming_Merchandise.png","../../images/slideBar/watches.jpg","../../images/slideBar/clothes.png","../../images/slideBar/bag.jpg"]
var currentImg=0
var sld;
var imgElement=document.getElementById("pic")

sld=setInterval(function (){
    currentImg++
if(currentImg>4){
    currentImg=0
}
imgElement.setAttribute("src",images[currentImg]);
},2000);

function showNavbar(){
    if(document.getElementById("navbarBottom").style.display=="none"){
        document.getElementById("navbarBottom").style.display="block";
        document.getElementById("slider").style.marginTop = "10px";
    }else{
        document.getElementById("navbarBottom").style.display="none";
        document.getElementById("slider").style.marginTop = "90px";
    }
}