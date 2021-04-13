import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'sobre',
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'explore',
    loadChildren: () => import('./views/explore/explore.module').then(m => m.ExploreModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
