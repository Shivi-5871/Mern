const formElement = document.querySelector("#weather-form");

// const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=44de12b8de9e7d6ab1a241504f6b1366";
async function getTemp(url,city){
    const responseVar = await fetch(url);
    console.log(responseVar);

    const dataItem = await responseVar.json();
    console.log(dataItem);

    // console.log(dataItem.main.temp);
    const weatherInfo = document.querySelector("#weather-info");
    weatherInfo.textContent = "Temperature for city : " + city + " is : " +  dataItem.main.temp;
}

//form submit karne par mujhe city ka naam mill jaaey

// function getInputAndPrintTemp(event){
   
// }
formElement.addEventListener('submit',function(event){
    event.preventDefault();
    const inputField = document.querySelector("#city");
    const city = inputField.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44de12b8de9e7d6ab1a241504f6b1366`;
    getTemp(url,city);

});



