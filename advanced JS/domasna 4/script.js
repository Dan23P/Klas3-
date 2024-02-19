console.log("CONNECTED");

let list = document.getElementById("list");
let nameOfAcademy = document.getElementById("name");
let theData = {};
fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
    .then(function (response) {
        response.json()
            .then(function (data) {
                console.log(data)
                theData = data;
            })
            .catch(function (unsuccessfullParse) {
                console.log(unsuccessfullParse)
            })
    })
    .catch(function (unsuccessfullResponse) {
        console.log(unsuccessfullResponse)
    })
    let theListUn = document.createElement("ul");
    let theButn = document.getElementById("dataButton").addEventListener("click", function(e){
    console.log("works");
    nameOfAcademy.innerHTML = theData.academy;
    theListUn.innerHTML = "";
    for (i = 0; i < theData.students.length; i++) {
        let listItemz = document.createElement("li")
        listItemz.innerHTML = theData.students[i];
        theListUn.appendChild(listItemz);
    }
    list.appendChild(theListUn);
 })