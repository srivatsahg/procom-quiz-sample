import {Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes:Routes=
[
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'welcome', component: WelcomeComponent
    },
    {
        path:'quiz',component:QuizComponent
    },
    {
        path:'scoreboard',component:ScoreboardComponent
    },    
    {
        path:'result',component:ResultComponent
    },    
    {
        path:'',redirectTo:'/welcome',pathMatch:'full'
    }    
];