import { Component, OnInit } from '@angular/core';
import { TaskType } from './TaskType'
import {SaveService} from './save.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  taskform:TaskType = {
    title: '',
    description: ''
  }; 
  constructor(private savesvc:SaveService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.taskform.title && this.taskform.description){
      this.savesvc.save(this.taskform).subscribe(data => {
        console.log(data);
        window.location.href = '/';
      })
    }else{
      alert('you must to fill in all of fields');
    }
  }
}
