//console.log('Java Script Exe');

let img_box = document.getElementById("lg-img");
let img_button = document.getElementsByClassName("img-sm");

function chenger(ActiveImage) {
  img_box.src = ActiveImage.src;
  
  if(img_box.contains(ActiveImage)){
    img_button.style="opacity:1";
  }
}