let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function displayTemperature(response) {
  // Select the temperature element
  // inject the current temperature inside the temperature element
  // inject the city name inside the temperature
  console.log(response);

  let temperatureData = response["data"];
  console.log(temperatureData);
  let tempCity = temperatureData["city"]; // temp response from the API
  // variable are just boxes for your information - a label
  console.log(`show me the city ${tempCity}`);
  let currentTemp = temperatureData.temperature.current;
  console.log(currentTemp);
  // let tempCity = temperatureDate["city"]
  // let tempCity = temperatureDate.city

  let currentCondition = temperatureData.condition.description;
  console.log(currentCondition);

  let currentHumidity = temperatureData.temperature.humidity;
  console.log(currentHumidity);

  let currentWind = temperatureData.wind.speed;
  console.log(currentWind);

  let temperatureElement = document.querySelector("currenttempvalue");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".currentCity");

  cityElement.innerHTML = tempCity;
  // tempCity house city data

  let tempElement = document.querySelector(".currenttempvalue");
  tempElement.innerHTML = currentTemp;

  let humidityElement = document.querySelector(".currenthumidityvalue");
  humidityElement.innerHTML = currentHumidity;
  // document.querySelector(".currenthumidityvalue").innerHTML = currentHumidity;

  document.querySelector(".currentCondition").innerHTML = currentCondition;
  // condesed by removing the element
  // conditionElement.innnerText = currentCondition;
  // console.log(conditionElement.innerHTML);
  // console.log(currentCondition);

  document.querySelector(".currentWindSpeed").innerHTML = currentWind;
}

function search(event) {
  event.preventDefault();
  // let searchInputElement = document.querySelector("#searchinput");
  let city = document.getElementById("searchInput2").value;
  console.log(city);

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
  // cityElement.innerHTML = city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDay();

  // Tuesday 11:16
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hour}:${minutes}`;
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector(".currentDay");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
