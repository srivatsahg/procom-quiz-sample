import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quizservice';
import { Router } from '@angular/router';
import { Question } from '../shared/quiz';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  answerBank:Question[];

  constructor(private quizService:QuizService,private router:Router) {

  }

  ngOnInit() {
    this.answerBank = this.quizService.getAnswers();
    this.quizService.correctAnswerCount = 0;
    this.quizService.questionlist.forEach((e,i)=>{
      if(e.userChoice == this.answerBank[i].answer){
        this.quizService.correctAnswerCount++;
      }
    })
  }

  onRestart(){
    this.router.navigate(['/welcome']);
  }

}
