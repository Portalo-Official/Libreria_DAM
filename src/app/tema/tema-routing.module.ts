import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTemaComponent } from './pages/layout-tema/layout-tema.component';
import { ListTemaComponent } from './pages/list-tema/list-tema.component';
import { EditTemaComponent } from './pages/edit-tema/edit-tema.component';
import { NewTemaComponent } from './pages/new-tema/new-tema.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutTemaComponent,
    children:[
      {path:'list', component: ListTemaComponent},
      {path:'edit/:id', component: EditTemaComponent},
      {path:'new', component: NewTemaComponent},
      {path:'**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemaRoutingModule { }
