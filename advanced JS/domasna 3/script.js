console.log("CONNECTED");
let dataOfAstronauts = {}
let listPart = document.getElementById("listPart");
fetch("http://api.open-notify.org/astros.json")
.then(function(response){
    response.json().then(function(data){
        console.log(data)
        dataOfAstronauts = data;
    })
    .catch(function(unsuccessfullParse) {
        console.log(unsuccessfullParse)
    })
    
})
.catch(function(unsuccessfullResponse) {
    console.log(unsuccessfullResponse)
})
let list = document.createElement("ul")
let astronautBtn = document.getElementById("astronautButton").addEventListener("click",function(e){
    list.innerHTML = "";
    for (i = 0; i < dataOfAstronauts.people.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = dataOfAstronauts.people[i].name;
        list.appendChild(listItems);
    }
    listPart.appendChild(list);

})
