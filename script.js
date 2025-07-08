const api_key="e4cca017ad9254f1fa6baca1b12f9a40";

const getweather=async()=>{
    const place=document.querySelector("#place").value;
const URL=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}&units=metric`;
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();// understandable to human means everyone can read this .
    console.log(data);
    console.log(`Temperature in ${data.name}: ${data.main.temp}°C`)
    
para.innerText=`Temperature in ${data.name}: ${data.main.temp}°C , Wind speed is :${data.wind.speed} `;
}

document.querySelector("#search-button").addEventListener("click",getweather);

let para=document.querySelector("#para");
