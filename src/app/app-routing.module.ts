import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    pathMatch: 'full'
  },
  {
    path: 'board',
    redirectTo: '',
    pathMatch: 'full',
    
  },
  {
    path: 'angular_front_page',
    component: AppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
