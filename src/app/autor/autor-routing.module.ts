import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAutorComponent } from './pages/layout-autor/layout-autor.component';
import { ListAutorComponent } from './pages/list-autor/list-autor.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutAutorComponent,
    children:[
      {path:'list',component:ListAutorComponent},
      {path:'new',component:ListAutorComponent},
      {path:'edit',component:ListAutorComponent},
      {path:'**',redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
