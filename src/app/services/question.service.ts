import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private _http:HttpClient) { }

  public getQuestionsOfQuiz(quizId:any){
    return this._http.get(`${baseUrl}/question/quiz/${quizId}`)
  }

  public addQuestionOfQuiz(question:any){
    return this._http.post(`${baseUrl}/question/`,question)
  }

  public deleteQuestion(questionId:any){
    return this._http.delete(`${baseUrl}/question/${questionId}`)
  }

  public evalQuiz(questions:any,user_id:any){
    return this._http.post(`${baseUrl}/question/eval-quiz/${user_id}`,questions);
  }
}
