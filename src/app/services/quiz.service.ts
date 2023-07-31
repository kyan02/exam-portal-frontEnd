import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes() {
    return this._http.get(`${baseUrl}/quiz/all`);
  }

  public addQuiz(quiz: any) {
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  public deleteQuiz(id:any){
    return this._http.patch(`${baseUrl}/quiz/`,id);
  }

  public getQuiz(id:any){
    return this._http.get(`${baseUrl}/quiz/${id}`);
  }

  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizzesOfCategory(categoryId:any){
    return this._http.get(`${baseUrl}/quiz/category/${categoryId}`);
  }
}
