import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },  // Redirects to companies
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent }
];
