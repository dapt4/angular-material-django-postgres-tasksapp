import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './pages/edit/edit.component';
import {ListComponent} from './pages/list/list.component';
import {NewComponent} from './pages/new/new.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'new', component:NewComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
