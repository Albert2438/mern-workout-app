fetch("http://localhost:5000/profile")
    .then(res =>res.json())
    .then(data => console.log(data));