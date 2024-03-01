import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAutorComponent } from './pages/layout-autor/layout-autor.component';
import { ListAutorComponent } from './pages/list-autor/list-autor.component';
import { NewAutorComponent } from './pages/new-autor/new-autor.component';
import { EditAutorComponent } from './pages/edit-autor/edit-autor.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutAutorComponent,
    children:[
      {path:'list',component:ListAutorComponent},
      {path:'new',component:NewAutorComponent},
      {path:'edit/:id',component:EditAutorComponent},
      {path:'**',redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
