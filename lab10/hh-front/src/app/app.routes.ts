import { Routes } from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  {
    path: 'companies',
    component: CompaniesComponent,
    title: 'Companies',
  },
  {
    path: 'companies/:id',
    component: CompanyDetailsComponent,
    title: 'Company vacancies',
  }
];
