import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskType} from './TaskType';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor(private http: HttpClient) { }

  save(id:string, task:TaskType){
    let url = `http://localhost:8000/task/${id}`;
    return this.http.put<TaskType>(url, task, {
      headers:{
        "Content-type":"application/json"
      }
    })
  }
}
