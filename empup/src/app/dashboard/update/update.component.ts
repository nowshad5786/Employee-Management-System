import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employee!:Employee[];
  constructor(private https:HttpClient) { }

  ngOnInit(): void {
    
  }
  onSubmit(data:Employee){

    this.https.post('http://localhost:8094/emp/empUpdate/+`${data.emp_id}`',data).subscribe((result)=>{

      console.log("result",result);

      console.log(data);

    })
    alertify.alert('Success!!', 'Employee Detail is successfully Update');

  }

}
