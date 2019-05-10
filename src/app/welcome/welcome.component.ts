import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:Router) 
  { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Shall start the register component');
    this.route.navigate(['/register']);
  }

}
