function startClick() {
    console.log("Start clicked")
}


var btn = document.getElementById("btn");

btn.addEventListener('click', startClick)
btn.addEventListener('click', function (e) {
    console.log(e);
})

var searchBar = document.getElementById("search_bar");
// searchBar.value = "";
searchBar.style.backgroundColor = "blue";
searchBar.style.color = "white";
var menu = document.getElementById("menu");
// var Newitem = document.createElement("li");
// Newitem.textContent = "Fries"
// menu.appendChild(Newitem)

// var liList = menu.getElementsByTagName("li")
// console.log(liList)
// var firstLi = liList[0];
// firstLi.remove()

menu.textContent = ""