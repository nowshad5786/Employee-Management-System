import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employees!:Employee[];
  constructor(private employeeService:EmployeeService, private https:HttpClient) { }

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe((data:Employee[])=>

    {
      console.log(data);

      this.employees=data;

    });
  }

}
