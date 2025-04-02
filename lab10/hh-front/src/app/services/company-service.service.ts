import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../interfaces/company';
import {Vacancy} from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  private apiUrl = 'http://localhost:8000/api/companies/'
  constructor(private http: HttpClient) { }

  getCompaniesList(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl)
  }
  getCompanyDetails(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`)
  }
  getCompanyVacancies(id: string): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/${id}/vacancies`)
  }
}
