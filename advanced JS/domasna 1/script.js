console.log("CONNECTED");
let listDiv = document.getElementById("listDiv");

let button = formButton.addEventListener("click", function (e) {
    let font = parseInt(document.getElementById("fontSize").value);
    if (isNaN(font)) {
        alert("error");
    } else {


        let unorderdList = document.createElement("ul");
        let colour = document.getElementById("color").value;
        unorderdList.style.backgroundColor = colour;

        if (colour === "black" || colour === "blue") {
            console.log("gellos");
            unorderdList.style.color = "white";

        }
        console.log(font);
        unorderdList.style.fontSize = font + "px";
        let items = [];
        items = document.getElementById("items").value.split(",");
        console.log(items);
        for (let i = 0; i < items.length; i++) {
            let listItems = document.createElement("li");
            listItems.innerText = items[i];
            unorderdList.appendChild(listItems);
        }
        listDiv.appendChild(unorderdList);
    }
});
