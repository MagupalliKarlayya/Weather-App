const apikeyid='dab64e54e84bb9c4ed4621818023cd3c';
const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric';
var cityname;
const weatherimg =  document.querySelector('.weather-img');
async function checkweather(){
  
    const response = await fetch(apiurl+`&q=${cityname}`+`&appid=${apikeyid}`);
    if(response.status == 404)
        {
            document.querySelector('.error').style.display='block';
            document.querySelector('.error2').style.display='none';
            document.querySelector('.main').style.display='none';
        }else if(response.status == 400)
            {
                document.querySelector('.error2').style.display='block';
                document.querySelector('.error').style.display='none';
                document.querySelector('.main').style.display='none';
                    }else{
            var data=await response.json();
            document.querySelector('.city').innerHTML=data.name;
            document.querySelector('.temp').innerHTML=~~data.main.temp+'°C';
            document.querySelector('.humidity-temp').innerHTML=data.main.humidity +'%';
            document.querySelector('.wind-speed').innerHTML=`${data.wind.speed} km/h`;
            if( data.weather[0].main === 'Clear'){
                weatherimg.src = "images/clear.png";
            }else   if( data.weather[0].main === 'Clouds'){
                weatherimg.src = "images/clouds.png";
            }else   if( data.weather[0].main === 'Drizzle'){
                weatherimg.src = "images/drizzle.png";
            }else   if( data.weather[0].main === 'Mist'){
                weatherimg.src = "images/mist.png";
            }else   if( data.weather[0].main === 'Rain'){
                weatherimg.src = "images/rain.png";
            }
            document.querySelector('.error').style.display='none';
            document.querySelector('.error2').style.display='none';
            document.querySelector('.main').style.display='block';
        }
}

document.querySelector('#button').addEventListener('click',()=>{
 cityname=document.querySelector('#mytext').value;
    checkweather();
})

