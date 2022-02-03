import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { GetBookComponent } from './get-book/get-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: 'create', component: CreateBookComponent },
  { path: 'update', component: UpdateBookComponent },
  { path: 'get', component: GetBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
