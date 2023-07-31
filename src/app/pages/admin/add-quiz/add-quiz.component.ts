import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  constructor( private _category:CategoryService, private _snack : MatSnackBar, private _quiz:QuizService) {}

    categories:any
    quiz = {
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      isActive: true,
      createdBy: "Admin",
      category:null,
    }

    ngOnInit(): void {

      this._category.categories().subscribe(
        (data:any)=>{
          this.categories = data;
        },
        (error)=>{
          console.log(error);
        }
      )
    }

    resetQuizObject(): void {
      this.quiz = {
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        isActive: true,
        createdBy: '',
        category:null,
      };
    }

    //add Quiz
    addQuiz(){

      if(this.quiz.title.trim()=='' || this.quiz.title == null){
        this._snack.open('Title Required!','',{
          duration:3000,
        });
        return;
      }

      //call server to save quiz
      this._quiz.addQuiz(this.quiz).subscribe(
        (data)=>{
          alert("Quiz is saved")
          this.resetQuizObject();
        },
        (error)=>{
          alert("Oops Something Went wrong")
          console.log(error)
        }
      )
    }
}
