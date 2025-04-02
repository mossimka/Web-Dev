import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompaniesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
}
