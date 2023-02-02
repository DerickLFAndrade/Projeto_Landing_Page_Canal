let a = document.getElementById("cont");
let n = document.getElementById("number");
let bool;
let i = 0;
window.onload = ()=>{
    setInterval(() => {
        n.innerHTML = i++
    }, 1000);
}
a.addEventListener("click", ()=>{
    if(bool == false) {
        a.style.background = "#f00";
        bool = true;
      
    }
    else {
        a.style.background = "#ccc";
        bool = false;
    }
})

       
