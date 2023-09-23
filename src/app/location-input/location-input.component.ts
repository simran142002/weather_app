import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();
  location: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  fetchWeatherData() {
    this.locationSelected.emit(this.location);
  }
}