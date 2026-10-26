let btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    let input = document.getElementById("type")
    let ul = document.getElementById("cart")
    let item = document.createElement("li")

item.innerHTML = input.value;
let icon =  document.createElement("i")
icon.className = "fa-solid fa-circle-xmark";
icon.addEventListener("click" , function(){
    item.remove();
})
item.appendChild(icon)
ul.appendChild(item)

input.value = "";
})


// object------------>
// Definition of Object in JavaScript:
// An object in JavaScript is a collection of properties, where each property contains a key and a value.

// syntax------------------->
// let student = {
//     key : value,
// }

let batsman = {
    name : "babar azam",
    shirtNo : 56,
    playRole: "batsman",
    country : "pakistan"
}
console.log(batsman);
