const weather_icon = document.getElementById('weather');
const locName = document.getElementById('loc_name');
const avgTemp = document.getElementById('Avg_temp');
const minTemp = document.getElementById('min_temp');
const maxTemp = document.getElementById('max_temp');
const description = document.getElementById('Desc');

const input = document.getElementById('Search');

const Avg_temp = document.getElementById('Avg_temp');

let Location = 'Delhi';

function changeLocation() {

}




function fetchApi() {

    Location = input.value;

    setTimeout(() => {

        let x = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=c505e49edf953469d413b37f2f6e4974`)
            .then((value) => {
                return value.json()
            }).then((value) => {

                let weather_desc = value.weather[0].main;

                // console.log(weather_desc);
                // console.log(value);
                locName.innerHTML = value.name;
                minTemp.innerHTML = value.main.temp;
                minTemp.innerHTML = value.main.temp_min;
                maxTemp.innerHTML = value.main.temp_max;
                description.innerHTML = weather_desc;

                console.log(value.main.temp)

                if (weather_desc == 'Haze') {
                    weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-smog')
                }
                else if (weather_desc == 'Clear') {
                    weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-sun')
                }
                else if (weather_desc == 'Rain') {
                    weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-cloud-rain')
                }
                else if (weather_desc == 'Clear Sky') {
                    weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-cloud-sun')
                }
            }).catch((error) => {
                console.log(error)
            })
    }, 3000);
    // console.log(Location)

}


input.addEventListener('input', () => {

    fetchApi()

});

// LOCATION TARGET

const loc_pin = document.getElementById('loc');

loc_pin.addEventListener('click', ()=> {
    navigator.geolocation.getCurrentPosition((locData)=> {
        let Lat = locData.coords.latitude;
        let Lon = locData.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=c505e49edf953469d413b37f2f6e4974`)
        .then((value) => {
            return value.json()
        }).then((value) => {

            let weather_desc = value.weather[0].main;

            // console.log(weather_desc);
            // console.log(value);
            locName.innerHTML = value.name;
            minTemp.innerHTML = value.main.temp;
            minTemp.innerHTML = value.main.temp_min;
            maxTemp.innerHTML = value.main.temp_max;
            description.innerHTML = weather_desc;
            if (weather_desc == 'Haze') {
                weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-smog')
            }
            else if (weather_desc == 'Clear') {
                weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-sun')
            }
            else if (weather_desc == 'Rain') {
                weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-cloud-rain')
            }
            else if (weather_desc == 'Clear Sky') {
                weather_icon.classList.replace('fa-cloud-sun-rain', 'fa-cloud-sun')
            }
        }).catch((error) => {
            console.log(error)
        })
    })
})

