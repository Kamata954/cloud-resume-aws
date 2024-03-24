fetch("https://xh97jyjxdj.execute-api.us-east-1.amazonaws.com/Prod/hello")
    .then(response => response.json())
    .then((data) => {
        document.getElementById("replaceme").innerText = data.count
    })
