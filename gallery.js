let cross= document.getElementById('bar');
let close=document.getElementById('close');
let navbar= document.getElementById("navbar");

if(cross){
    cross.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}