const fetch = require('node-fetch');


fetch('https://api.openweathermap.org/data/3.0/onecall?lat=39.46392&lon=-74.51258&exclude=minutely&appid=1dcd08464d9025c1d0e54643f0bed398')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
