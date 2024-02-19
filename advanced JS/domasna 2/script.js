console.log("CONNECTED");
let listOfReminders = [];
let tablePart = document.getElementById("tablePart");

let addReminder = document.getElementById("addReminder").addEventListener("click", function (e) {
    console.log("YOU DID IT");
    let title = document.getElementById("title").value
    let priority = document.getElementById("priority").value
    let color = document.getElementById("color").value
    let descr = document.getElementById("description").value

    let reminder = {
        title: title,
        priority: priority,
        color: color,
        descr: descr,
    };

    listOfReminders.push(reminder);

    console.log(listOfReminders);
});
let showAllReminders = document.getElementById("showAll").addEventListener("click", function (e) {
    tablePart.innerHTML = "";
    let tableOfReminders = document.createElement("table");
    tableOfReminders.style.border = "1px solid black";
    for (let i = 0; i < listOfReminders.length; i++) {
        let tableRows = document.createElement("tr");
        tableRows.style.border = "1px solid black";
        for (const property in listOfReminders[i]) {
            let tableData = document.createElement("td");
            tableData.style.border = "1px solid black";
            tableData.textContent = listOfReminders[i][property];
            tableRows.appendChild(tableData);
        }
        tableOfReminders.appendChild(tableRows);
    }
    tablePart.appendChild(tableOfReminders);
})