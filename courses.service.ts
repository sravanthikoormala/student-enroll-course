import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
url="http://localhost:8085/course/";
  constructor(private http: HttpClient) { }

  getCourses(){
   return this.http.get(this.url);
  }

  getCoursesById(id:any){
    return this.http.get(this.url+id);
  }

  addCourse(course:any){
    return this.http.post(this.url, course);
  }

  updateCourseById(course:any){
    return this.http.put(this.url+course.id, course);
  }

  deleteCourseById(id:any){
    return this.http.delete(this.url+id);
  }
  getCoursesByStudentId(id:any){
    return this.http.get("http://localhost:8085/student/student/"+id);
  }
}
