import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //Internal Template
  template:`
           <h1>{{M3}}</h1>
  
          <body>
               Hey Siri, how to know more about Angular and Typesscript?
          </body>`,
 //External Template
 // templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit
{
  M3 = "Welcome to skillsoft Platform"
 
  constructor() {}

  ngOnInit(): void {
    
  }

  
}
                                  