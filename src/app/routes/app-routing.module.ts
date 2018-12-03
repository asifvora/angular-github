import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './../components/github/github.component';
import { HomeComponent } from './../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/github',
    pathMatch: 'full'
  },
  {
    path: 'github',
    component: HomeComponent
  },
  {
    path: 'github/:username',
    component: GithubComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
