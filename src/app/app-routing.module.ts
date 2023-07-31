import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { LearnerGuard } from './services/learner.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [

  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : "full",
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : "full",
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : "full",
  },
  {
    path : 'admin',
    component : DashboardComponent,
    canActivate : [AdminGuard],
    children:[
      {
        path : '',
        component: WelcomeComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'add-category',
        component: AddCategoriesComponent
      },      
      {
        path:'category',
        component: ViewCategoriesComponent
      },      
      {
        path:'quizzes',
        component: ViewQuizzesComponent
      },      
      {
        path:'add-quiz',
        component: AddQuizComponent
      },      
      {
        path:'quiz/:qid',
        component: UpdateQuizComponent
      },
      {
        path:'questions/:id/:title',
        component: ViewQuestionsComponent
      },
      {
        path:'add-question/:id/:title',
        component: AddQuestionComponent
      }
    ]
  },
  {
    path : 'user-dashboard',
    component : UserDashboardComponent,
    canActivate: [LearnerGuard],
    children: [
      {
        path : ':categoryId',
        component: LoadQuizComponent
      },
      {
        path : 'instructions/:quizId',
        component: InstructionsComponent
      }
    ]
  },
  {
    path : 'start/:quizId',
    component: StartComponent,
    canActivate: [LearnerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
