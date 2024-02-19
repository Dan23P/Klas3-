console.log("CONNECTED");

let theData = {};

let myTable = document.getElementById("myTable");

fetch("https://swapi.dev/api/planets/?page=1")
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

let button = document.getElementById("tableButton").addEventListener("click", function (e) {
    console.log("works");
    for (let j = 1; j <= 10; j++) {
        if (myTable.children.length > 1) {
            myTable.removeChild(myTable.children[1]);
        }
    }
    for (let i = 0; i < theData.results.length; i++) {
        let tableRows = document.createElement("tr");
        for (let int = 0; int <= 4; int++) {
            if (int === 0) {
                let tableData = document.createElement("td");
                tableData.textContent = theData.results[i].name;
                tableRows.appendChild(tableData);
            } else if (int === 2) {
                let tableData = document.createElement("td");
                tableData.textContent = theData.results[i].population;
                tableRows.appendChild(tableData);
            } else if (int === 3) {
                let tableData = document.createElement("td");
                tableData.textContent = theData.results[i].climate;
                tableRows.appendChild(tableData);
            } else if (int === 4) {
                let tableData = document.createElement("td");
                tableData.textContent = theData.results[i].gravity;
                tableRows.appendChild(tableData);
            }

        }
        myTable.appendChild(tableRows);
    }

})