import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  public Editor = ClassicEditor;
  questionId: any;
  questionTitle: any;
  question = {
    quiz: {
      id: ''
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    type: '',
    isActive: true
  }

  constructor(private _route: ActivatedRoute, private _question: QuestionService) { }

  ngOnInit(): void {

    this.questionId = this._route.snapshot.params['id'];
    this.questionTitle = this._route.snapshot.params['title']
    this.question.quiz['id'] = this.questionId
  }

  formSubmit() {

    if (this.question.content.trim() == '' || this.question.content == null)
      return;
      if (this.question.answer.trim() == '' || this.question.answer == null)
      return;
      if (this.question.option1.trim() == '' || this.question.option1 == null)
      return;
      if (this.question.option2.trim() == '' || this.question.option2 == null)
      return;
      if (this.question.option3.trim() == '' || this.question.option3 == null)
      return;
      if (this.question.option4.trim() == '' || this.question.option4 == null)
      return;

      this._question.addQuestionOfQuiz(this.question).subscribe(
        (data)=>{
          alert("Question Added Succesfully")
          this.resetQuestionObject();
        },
        (error)=>{
          alert("oops something went wrong")
          console.log(error);
        }
      )
  }

  resetQuestionObject() : void {
    this.question = {
      quiz: {
        id: ''
      },
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
      type: '',
      isActive: true
    }
  }
   
}
