let btnOut = document.getElementById("btnOut");
let heading = document.getElementById("show");



btnOut.onclick = function(){
    localStorage.removeItem("name");
    window.open("index.html" , "_self");
}


let uName= JSON.parse(localStorage.getItem("name"));

heading.innerHTML = `Welcome ${uName}`; 