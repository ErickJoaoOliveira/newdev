import { Injectable } from '@angular/core';

export type InstructorType = {
  avatarUrl: string
  fullName: string
}

export type LessonResponseType = {
  title: string
  description: string
  videoId: string
  instructor: InstructorType
}

@Injectable({
  providedIn: 'root'
})


export class LessonService {

  constructor() { }

  async getLessonById(id: number): Promise<LessonResponseType> {
    const response = await fetch(`https://eo-newdev.herokuapp.com/lessons/${id}`)

    const data = await response.json()
    return data
  }

  async getLesson(): Promise<LessonResponseType> {
    const response = await fetch(`http://eo-newdev.herokuapp.com/lessons`)

    const data = await response.json()
    return data
  }

}
