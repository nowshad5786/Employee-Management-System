import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private https:HttpClient) { }

  emp_id!:string;
  ngOnInit(): void {
  }
  onSubmit(data:Employee){

      this.https.post('http://localhost:8094/emp/empDelete/'+`${data.emp_id}`,data).subscribe((result)=>{

      console.warn("result",this.emp_id);

      console.warn(data);

    });
    alertify.alert('Success!!', 'Employee Detail is successfully Remove');
    }

}


