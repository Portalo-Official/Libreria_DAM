import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutPagesComponent,
    children: [
                {path:'list', component: ListPageComponent},
                {path:':isbn', component: LibroPagesComponent},
                {path:'**', redirectTo:'list'},
              ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
