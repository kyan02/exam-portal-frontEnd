import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
  quizzes: any;

  constructor(private _quiz: QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        console.log(data);
        this.quizzes = data;
        console.log("inside quiz")
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
      });
  }

  deleteQuiz(id: any) {
    this._quiz.deleteQuiz(id).subscribe(
      (data) => {
        alert("Quiz Deleted")
        this.quizzes = this.quizzes.filter((quiz:any) => quiz.id != id.id)
      },
      (error) => {
        alert("Error In deleteing Quiz");
      }
    );
  }
}
