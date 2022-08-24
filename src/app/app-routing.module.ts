import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'pages/all',component:HomeComponent},
  {path:'pages/projects',component:ProjectsComponent},
  {path:'pages/resume',component:ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
