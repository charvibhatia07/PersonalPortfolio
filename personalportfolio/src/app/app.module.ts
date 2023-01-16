import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './profile/about/about.component';
import { IntroComponent } from './profile/intro/intro.component';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './profile/experience/experience.component';
import { EducationComponent } from './profile/education/education.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SplitPipe } from './profile/split.pipe';
import { FooterComponent } from './profile/footer/footer.component';



const routes: Routes = [
  {
    path: ''
    ,component: IntroComponent
  },
  {
    path: 'home'
    ,component:IntroComponent
  },
  {
    path: 'about'
    ,component: AboutComponent
  },
  
  {
    path: 'experience'
    ,component: ExperienceComponent
  },
  {
    path: 'education'
    ,component: EducationComponent
  },
  {
    path: 'projects'
    ,component: ProjectsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntroComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SplitPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
      HttpClientModule,
      FormsModule,
      NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
