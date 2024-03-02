import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { EditLibroComponent } from './pages/edit-libro/edit-libro.component';
import { CreateLibroComponent } from './pages/create-libro/create-libro.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutPagesComponent,
    children: [
                {path:'list', component: ListPageComponent},
                {path:'libro/:isbn', component: LibroPagesComponent},
                {path:'edit/:isbn', component: EditLibroComponent},
                {path:'create', component: CreateLibroComponent},
                {path:'**', redirectTo:'list'},
              ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
