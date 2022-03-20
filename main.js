let contain=document.querySelector(".hi-slider");
let myImage=document.querySelectorAll(".mimg")
function scrolling(e){
    myImage.forEach((sliderImage)=>{
        let slidInAt=(window.scrollY + window.innerHeight);
        console.log(slidInAt)
        if(slidInAt>=1000 && slidInAt<=2200){
            sliderImage.classList.add("here")
        }else{
            sliderImage.classList.remove("here")
        }
    });
}
document.addEventListener("scroll",scrolling)