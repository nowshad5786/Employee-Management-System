import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private https:HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(data:Employee){

    this.https.post('http://localhost:8094/emp/empAdd',data).subscribe((result)=>

      console.warn("result",result));

      console.log(data);
      alertify.alert('Success!!', 'Form is successfully submitted');
    }
}
