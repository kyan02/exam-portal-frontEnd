import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {

  quizId:any
  quiz:any

  constructor(private _route: ActivatedRoute, private _quiz : QuizService, private _router:Router) {}

  ngOnInit() : void {

    this.quizId = this._route.snapshot.params['quizId'];

    this._quiz.getQuiz(this.quizId).subscribe(
      (data)=>{
        this.quiz = data
      },
      (error)=>{
        alert("Oops something went wrong");
      }
    )   
  }

  startQuizConfirmation(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showDenyButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `No, Take me Back`,
      icon: 'warning'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._router.navigate(['/start/' + this.quizId])
      }
    })
  }
}
