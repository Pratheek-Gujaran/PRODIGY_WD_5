const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d5d47cc26msh0cd6daecabca469p1ae14fjsn4f35385aee41',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Bangalore")

Mangalore = document.getElementById("Mangalore")
Mangalore.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Mangalore")
})

Udupi = document.getElementById("Udupi")
Udupi.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Udupi")
})

Bangalore = document.getElementById("Bangalore")
Bangalore.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Bangalore")
})

Chennai = document.getElementById("Chennai")
Chennai.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Chennai")
})

Mumbai = document.getElementById("Mumbai")
Mumbai.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Mumabai")
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempL.innerHTML = response.temp
		feels_likeL.innerHTML = response.feels_like
		humidityL.innerHTML = response.humidity
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sentosa', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempS.innerHTML = response.temp
		feels_likeS.innerHTML = response.feels_like
		humidityS.innerHTML = response.humidity
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kuala+Lumpur', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempK.innerHTML = response.temp
		feels_likeK.innerHTML = response.feels_like
		humidityK.innerHTML = response.humidity
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		tempD.innerHTML = response.temp
		feels_likeD.innerHTML = response.feels_like
		humidityD.innerHTML = response.humidity
	})
	.catch(err => console.error(err));
