import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  //external style
  //styleUrls: ['./student.component.css']

    //internal style
  styles: [` table{
    color: maroon;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    border-collapse: collapse;
    
  }
  
  td{
    border: 1px solid black;
  }
  `]
})
export class StudentComponent implements OnInit {

  Name : string= "Rutuja"
  Email: string= "rutujas@gmail.com";
  constructor() {}

  ngOnInit(): void {
    
  }
}
