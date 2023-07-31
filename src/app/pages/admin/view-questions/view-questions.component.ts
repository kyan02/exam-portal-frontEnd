import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {

  constructor(private _route: ActivatedRoute, private _question : QuestionService, private _snack:MatSnackBar) {}
  qId:any;
  qTitle:any;
  questions:any;

  ngOnInit():void{
    this.qId = this._route.snapshot.params['id'];
    this.qTitle = this._route.snapshot.params['title'];
    console.log(this.qId + '/' + this.qTitle)

    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data)=> {
        this.questions = data;
        console.log(data)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteQuestion(questionId:any){
    this._question.deleteQuestion(questionId).subscribe(
      (data)=>{
        this._snack.open('Question Deleted Successfully','',{
          duration: 3000,
        });
        this.questions = this.questions.filter((q:any)=>q.id !=questionId)
      },
      (error)=>{
        this._snack.open('Oops something went wrong','',{
          duration: 3000,
        });
      }

    )
  }
}
