  import {Component, inject} from '@angular/core';
  import {NgForOf} from '@angular/common';
  import {Company} from '../interfaces/company';
  import {CompanyService} from '../services/company.service';

  @Component({
    selector: 'app-companies',
    imports: [
      NgForOf
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
