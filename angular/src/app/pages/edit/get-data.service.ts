import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskType} from './TaskType';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData(id: string){
    let url = `http://localhost:8000/task/${id}`;
    return this.http.get<TaskType>(url)
  }
}
