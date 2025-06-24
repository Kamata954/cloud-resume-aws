fetch("https://61noi7v3v9.execute-api.us-east-1.amazonaws.com/Prod/hello")
    .then(response => response.json())
    .then((data) => {
        document.getElementById("replaceme").innerText = data.count
    })
