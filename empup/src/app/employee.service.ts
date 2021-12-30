import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8094/emp/empGet";

 

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>

  {

    return this.http.get<Employee[]>(`${this.baseUrl}`);

  }
}
