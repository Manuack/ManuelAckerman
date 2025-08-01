import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories.component';

const routes: Routes = [
  { path: '', component: StoriesComponent }
];

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoriesModule { }