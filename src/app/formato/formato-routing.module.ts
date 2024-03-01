import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditFormatoComponent } from './pages/edit-formato/edit-formato.component';
import { LayoutFormatoComponent } from './pages/layout-formato/layout-formato.component';
import { ListFormatoComponent } from './pages/list-formato/list-formato.component';
import { NewFormatoComponent } from './pages/new-formato/new-formato.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutFormatoComponent,
    children:[
      {path:'list', component: ListFormatoComponent},
      {path:'edit/:id', component: EditFormatoComponent},
      {path:'new', component: NewFormatoComponent},
      {path:'**', redirectTo:'list'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatoRoutingModule { }
