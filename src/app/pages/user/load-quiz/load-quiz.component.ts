import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {

  categoryId:any;
  quizs:any;

  constructor(private _route: ActivatedRoute, private _quiz: QuizService) {}

  ngOnInit() : void {

    this._route.params.subscribe((params) =>{
      this.categoryId = params['categoryId'];
      if(this.categoryId == 0){
        this._quiz.quizzes().subscribe(
          (data)=>{
            this.quizs = data
            console.log(this.quizs)
          },
          (error)=>{
            alert("Oops Something went wrong our side")
          }
        )
      }else{
          this._quiz.getQuizzesOfCategory(this.categoryId).subscribe(
            (data)=>{
              this.quizs = data;
            },
            (error)=>{
              console.log(error);
            }
          )
      }
    })
  }
}
