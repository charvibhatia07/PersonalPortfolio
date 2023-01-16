import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { ScrollComponent } from './scroll/scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

// const routes: Routes = [
//   {
//     path: '' 
//     ,children:[
//       {
//         path: '',
//         component: ProfileComponent
//       },
//       {
//       path: '#about',
//       component: AboutComponent
//     }]
//   }
// ];

@NgModule({
  declarations: [
    FooterComponent,
    AboutComponent,
    IntroComponent,
    ScrollComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
