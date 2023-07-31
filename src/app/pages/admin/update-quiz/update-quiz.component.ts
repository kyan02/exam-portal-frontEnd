import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

  id = 0;
  quiz:any
  categories:any
  constructor(private _route:ActivatedRoute, private _quiz:QuizService, private _category:CategoryService) {}

  ngOnInit(): void{

    this.id = this._route.snapshot.params['qid'];

    this._quiz.getQuiz(this.id).subscribe(
      (data:any)=>{
        this.quiz = data
        console.log(data);
      },
      (error)=>{
        console.log(error)
      }
    )
    
    this._category.categories().subscribe(
      (data)=>{
        this.categories = data;
      },
      (error)=>{
        alert(error);
      }
    )
  }

  //update form
  public updateQuiz(){
    
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=>{alert("Quiz Updated")
    console.log(data);
    },
      (error)=> {alert("Something Went Wrong")}
    )
  }
}
