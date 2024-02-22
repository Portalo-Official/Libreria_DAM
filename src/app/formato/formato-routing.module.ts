import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFormatoComponent } from './pages/layout-formato/layout-formato.component';
import { ListFormatoComponent } from './pages/list-formato/list-formato.component';
import { NewFormatoComponent } from './pages/new-formato/new-formato.component';
import { EditFormatoComponent } from './pages/edit-formato/edit-formato.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutFormatoComponent,
    children:[
      {path:'list', component: ListFormatoComponent},
      {path:'edit', component: EditFormatoComponent},
      {path:'new', component: NewFormatoComponent},
      {path:'list', redirectTo:'list'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatoRoutingModule { }
