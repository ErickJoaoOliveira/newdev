import { Component, OnInit,Input } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courseService: CourseService;
    course: any;
    
    constructor(courseService: CourseService) { 
      this.courseService = courseService;
      this.course = {} as CourseResponseType;
    }
  
  async ngOnInit(): Promise<void> {
     this.course = await this.courseService.getCourse();
     
    }
  
    
  
}