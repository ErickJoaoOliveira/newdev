import { Component, OnInit } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {
  courseService: CourseService;
  course: CourseResponseType;
  lessonToShow: any;
  constructor(courseService: CourseService, private route: ActivatedRoute) {
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.params;

    const courseId = params['courseId'];


    this.course = await this.courseService.getCourseById(Number(courseId));

  }

  async setLessonToShow(lesson: any) {
    console.log(lesson);
    this.lessonToShow = lesson;
  }
}