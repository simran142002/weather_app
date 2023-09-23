import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any; // Store the fetched weather data here

  ngOnInit(): void {
    this.getWeatherData('9bd47b9717fb56b186bde9c639f7d484', 'Delhi'); // Replace with your API key and default location
  }

  getWeatherData(apiKey: string, location: string) {
    console.log(apiKey, location);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        this.weatherData = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
