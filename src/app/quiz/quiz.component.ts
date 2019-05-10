import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quizservice';
import { Question } from '../shared/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

questionnaire: Question[];
questionNumber: number;
score: number;

  constructor(private router:Router, 
                private quizService:QuizService) 
                { }

  ngOnInit() {

    // Reset score to zero 
    this.quizService.correctAnswerCount = 0;
    this.quizService.questionNumber = 0;
    this.questionNumber = 0;
    this.score = 0;
    this.questionnaire = this.quizService.getQuestions();
  }

  getQuestions(){
    this.questionnaire = this.quizService.getQuestions();
  }

  Answer(qid: any, choice: any) {

    console.log('Selected answer is : ' + choice);
    this.quizService.questionlist[this.quizService.questionNumber].userChoice = choice;
    this.quizService.questionNumber++;

    // Show final score board after 5 questions
    if (this.quizService.questionNumber === 5) {
      this.router.navigate(['/scoreboard']);
    }
  }

}
