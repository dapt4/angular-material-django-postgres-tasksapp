import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {

  constructor(private http:HttpClient) { }

  deleteTask(id:string){
    let url = `http://localhost:8000/task/${id}`;
    return this.http.delete(url)
  }
}
