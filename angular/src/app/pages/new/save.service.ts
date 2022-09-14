import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TaskType} from './TaskType';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  url = 'http://localhost:8000/task';
  constructor(private http: HttpClient) { }

  save(task: TaskType){
    return this.http.post(this.url, task, {
      headers:{
        "Content-type": 'application/json'
      }
    })
  }
}
