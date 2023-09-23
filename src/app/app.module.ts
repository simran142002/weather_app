import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { LocationInputComponent } from './location-input/location-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationInputComponent,
    NavbarComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
