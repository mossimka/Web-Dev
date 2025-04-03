import {Component, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Vacancy} from '../interfaces/vacancy';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-company-details',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  vacancies: Vacancy[] = [];
  companyService:CompanyService = inject(CompanyService);
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyVacancies(id).subscribe((vacancies: Vacancy[]) => {
      this.vacancies = vacancies;
    })
  }

}
