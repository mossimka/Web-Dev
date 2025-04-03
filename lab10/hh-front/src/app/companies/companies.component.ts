  import {Component, inject} from '@angular/core';
  import {NgForOf} from '@angular/common';
  import {Company} from '../interfaces/company';
  import {CompanyService} from '../services/company.service';
  import {provideRouter, RouterLink} from '@angular/router';

  @Component({
    selector: 'app-companies',
    standalone: true,
    imports: [
      NgForOf,
      RouterLink
    ],
    templateUrl: './companies.component.html',
    styleUrl: './companies.component.css'
  })
  export class CompaniesComponent {
    companies: Company[] = [];
    companyService:CompanyService = inject(CompanyService);
    ngOnInit():void {
      this.companyService.getCompaniesList().subscribe((companies: Company[]) => {
        this.companies = companies;
      });
    }
  }
