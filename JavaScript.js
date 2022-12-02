let a = document.getElementById("cont");
let bool;
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