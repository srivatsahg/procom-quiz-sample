import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { ResultComponent } from './result/result.component';
import {FormsModule} from '@angular/forms';
import { QuizService } from './shared/quizservice';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    ScoreboardComponent,
    ResultComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
