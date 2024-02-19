console.log("CONNECTED");
let theData = [];
fetch(' https://jsonplaceholder.typicode.com/todos')
  .then(function (response){
    response.json()
    .then(function (data) {
        console.log(data);
        theData = data;
        search(theData);
    })
    .catch(function (unsuccessfullParse) {
        console.log(unsuccessfullParse)
    })
  })
function search (theData) {
    console.log(theData[0])
}
