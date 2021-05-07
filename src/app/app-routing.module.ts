import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ContactComponent,
  HomeComponent,
  ProjectsComponent,
  SkillsComponent,
  WorkComponent,
} from '@components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  // {
  //   path: 'projects',
  //   component: ProjectsComponent,
  // },
  {
    path: 'contact',
    component: ContactComponent,
    data,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
