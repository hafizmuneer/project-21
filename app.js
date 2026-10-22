let btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    let input = document.getElementById("type")
    let ul = document.getElementById("cart")
    let item = document.createElement("li")

item.innerHTML = input.value;
ul.appendChild(item)
input.value = "";
})