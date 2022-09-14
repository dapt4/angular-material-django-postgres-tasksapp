import { Component, OnInit } from '@angular/core';
import { GetListService } from './get-list.service'
import {DeleteTaskService} from './delete-task.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: any = [];

  constructor(
    private getlistsvc: GetListService,
    private deletesvc: DeleteTaskService
  ) { }

  ngOnInit(): void {
    this.getListData()
  }

  getListData(){
    this.getlistsvc.getData().subscribe(data => {
      this.list = data
    })
  }

  deleteTask(id:string){
    this.deletesvc.deleteTask(id).subscribe(data => {
      console.log(data)
      this.list = this.list.filter((elm:any) => elm.id != id)
    })
  }
}
