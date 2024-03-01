import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEdicionComponent } from './pages/layout-edicion/layout-edicion.component';
import { ListEdicionComponent } from './pages/list-edicion/list-edicion.component';
import { EditEdicionComponent } from './pages/edit-edicion/edit-edicion.component';
import { NewEdicionComponent } from './pages/new-edicion/new-edicion.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutEdicionComponent,
    children:[
      {path:'list', component: ListEdicionComponent},
      {path:'edit/:id', component: EditEdicionComponent},
      {path:'new', component: NewEdicionComponent},
      {path: '**', redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdicionRoutingModule { }
