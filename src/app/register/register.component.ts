import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quizservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // regex
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private quizService: QuizService, private router: Router) { 

  }

  ngOnInit() {
  }

  onSubmit(name: string, email: string){

    //IDEALLY ON A WEB REQUEST WE WOULD GET AN OBSERVABLE LIKE BELOW, WHEN WE MAKE A CALL TO THE WEBAPI
    // this.quizService.registerParticipant(name, email).subscribe((data : any) => {
    //   this.router.navigate(['/quiz']);
    // });
    console.log('User ' + name + ' with email address ' + email + ' registered');
    this.router.navigate(['/quiz']);
  }
}
