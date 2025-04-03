import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompaniesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
}
