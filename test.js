import fetch from "node-fetch";
fetch('http://localhost:3000/api/expenses')
    .then((response) => response.text())
    .then((body) => {
        console.log("testing GET Method...");
        console.log(body);
        console.log("GET method is working")
    }); 