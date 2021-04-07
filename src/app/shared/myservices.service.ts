import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  public min = new BehaviorSubject(0);
  public sec = new BehaviorSubject<number>(0);
  public examId = new BehaviorSubject<number>(0);
  public mark = new BehaviorSubject<number>(0);
  url = 'http://localhost/quiz/';
  constructor(private http: HttpClient) { }

  getAllClasses(pageno: any, pagesize: any): Observable<any> {
    return this.http.get(
      this.url + 'allclasses/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  getSubjectList(id: any): Observable<any> {
    return this.http.get(this.url + 'allsubject/read_by_allsubject_classid.php?allSubject_classId=' + id);
  }

  getChapterList(id: any): Observable<any> {
    return this.http.get(this.url + 'allchapters/read_by_allchapters_subid.php?allChapters_subId=' + id);
  }

  getHomeList(id: any): Observable<any> {
    return this.http.get(this.url + 'homework/read_by_homework_chapter_id.php?homework_chapter_id=' + id);
  }

  getVideoList(id: any): Observable<any> {
    return this.http.get(this.url + 'youtube/read_by_youtube_chapter_id.php?youtube_chapter_id=' + id);
  }
  getTermList(subId: any, termId: any): Observable<any> {
    return this.http.get(this.url + 'questionpaper/read_by_questionpaper_sub_id.php?questionPaper_sub_id=' + subId + '&questionPaper_term_id=' + termId);
  }
}
