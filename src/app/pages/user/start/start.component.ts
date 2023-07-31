import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  quizId:any;
  questions:any
  totalMarks = 0
  correctAnswer = 0;
  attempted = 0;
  timer:any
  isSubmit = false;

  constructor(private location : LocationStrategy, private _route: ActivatedRoute, private _question: QuestionService) {}

  ngOnInit() : void {
    this.preventBackButton();
    this.quizId = this._route.snapshot.params['quizId'];
    this.loadQuestions()
    this.startTimer();
  }

  loadQuestions() {
    this._question.getQuestionsOfQuiz(this.quizId).subscribe(
      (data)=>{
        this.questions = data
        this.timer = this.questions.length * 2 * 60;
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Oops Something went wrong at our side!',
        })
      }
    )
  }

  preventBackButton() {
    history.pushState(null , location.href)
    this.location.onPopState(()=>{
      history.pushState(null, location.href)
    })
  }

  startTimer(){
    let t = window.setInterval(()=>{
      // is function ko hrr ek second baad call krega
      if(this.timer <=0 ){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }

  getFormattedTime()
  {
    let mm = Math.floor(this.timer/60)
    let ss =this.timer-mm*60
    return `${mm} min : ${ss} sec`;
  }

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `No take me back!!`,
      icon : 'warning'
    }).then((result)=>{
      if (result.isConfirmed) {
        this.evalQuiz();
      }
    })
  }

  evalQuiz() {
    console.log(this.questions)
    //call to server to evaluate quiz;
    this._question.evalQuiz(this.questions).subscribe(
      (data:any)=>{
       this.totalMarks = data.totalMarks;
       this.attempted = data.attempted;
       this.correctAnswer = data.totalCorrectAnswer;
       this.isSubmit=true;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  printPage(){
    window.print();
  }
}

