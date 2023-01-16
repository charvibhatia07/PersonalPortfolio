import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
     


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
    
      githurl: 'https://github.com/charvibhatia07/PersonalPortfolio',
    
      tech: 'Angular ,Bootstrap , Html , CSS'
    },


    

  ]
  about2 = `Software Developer with 1.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular , Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of HTML, CSS, Bootstrap,  and MYSQL`

  about = "I am somebody with positive mindset and make sure to do a lot of planning to priortise my tasks to tackle the situation so that there are less errors"
  

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  
  exprienceData: any = [
    

    {
      id: 2,
      company: 'Tata Consultancy Services',
      location: 'New Delhi',
      timeline: 'June 2021 - Present',
      role: 'Assistant System Engineer',
      work: `Technologies : Angular , JavaScript , HTML, CSS .
       Working as a team member to work on Single page Applications using Angular framework and also handling the errors .
       Responsible for look ,feel and presentation of web pages and application.
  `
    },
    {
        id: 1,
        company: 'Raksha Health Insurance',
        location: 'Faridabad',
        timeline: 'Jan 2021 to May 2021',
        role: 'Software Developer',
        work: `Technologies : Core Java , Advance Java , Sql .
        Developed the code functionalities , on the basis of the business Analyst's requirements .
        Provided bug fixes for the existing code and also writing basic queries in MYSql database.`
      }


  ]

  
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  
}