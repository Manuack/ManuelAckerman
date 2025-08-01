import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { 
    path: 'gallery', 
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  { 
    path: 'stories', 
    loadChildren: () => import('./modules/stories/stories.module').then(m => m.StoriesModule)
  },
  { 
    path: 'about', 
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }