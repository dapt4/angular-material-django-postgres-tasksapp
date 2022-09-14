import { Component, OnInit } from '@angular/core';
import { TaskType } from './TaskType';
import {ActivatedRoute} from '@angular/router';
import {GetDataService} from './get-data.service'
import {SaveDataService} from './save-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  taskId?: string | null;

  taskform: TaskType = {
    title: '',
    description: ''
  }

  constructor(
    private route: ActivatedRoute,
    private getDataSvc: GetDataService,
    private savedatasvc: SaveDataService
  ) { }

  ngOnInit(): void {
    this.getTaskId()
    this.fillInputs(this.taskId)
  }

  getTaskId(){
    this.taskId = this.route.snapshot.paramMap.get('id');
  }

  fillInputs(id:string | null | undefined){
    if (id){
      this.getDataSvc.getData(id).subscribe((data:TaskType)=>{
        this.taskform = data;
      })
    }
  }

  onSubmit(){
    if(
      this.taskId &&
      this.taskform.title &&
      this.taskform.description
    ){
      this.savedatasvc.save(this.taskId, this.taskform).subscribe(data=>{
        console.log(data)
        window.location.href = "/";
      })
    }else{
      alert('you must to fill in all inputs');
    }
  }

}
