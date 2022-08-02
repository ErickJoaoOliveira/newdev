import { Component, OnInit, Input } from '@angular/core';
import { LessonType } from 'src/app/course.service';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lessonId?: number;
  @Input() title?: string;

  lessonService: LessonService;
  Lesson: LessonResponseType;

  constructor(lessonService: LessonService) { 
    this.lessonService = lessonService;
    this.Lesson = {} as LessonResponseType;
  }

  onClickLesson (id: any) {
    this.lessonService.getLessonById(id)
  }

  ngOnInit(): void {
  }

}
