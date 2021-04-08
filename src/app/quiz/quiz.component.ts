import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservicesService } from '../shared/myservices.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  datas: any[] = [];
  pageno = 1;
  pagesize = 10;
  selectClass: number = 5;
  classId: any;
  subId: any;
  chapterId: any;
  showLoadingIndicator: boolean = false;
  allSubject: any[] = [];
  allChapters: any[] = [];
  examList: any[] = [];
  errorMessage = "";
  showData: boolean = true;
  firstView: boolean = true;
  constructor(private service: MyservicesService, private _router: Router) { }

  ngOnInit(): void {
    this.showLoadingIndicator = true
    this.service.getAllClasses(this.pageno, this.pagesize).subscribe((res) => {
      this.datas = res.document.records;
      this.showLoadingIndicator = false;

    })
  }

  onChangeClass(ev: any) {
    this.classId = ev.target.value;
    if (ev.target.value == 100) {
      this.showLoadingIndicator = false;
      this.allSubject = [];
      this.allChapters = [];
    } else {
      this.showLoadingIndicator = true
      this.allChapters = [];
      this.service.getSubjectList(this.classId).subscribe((data) => {
        this.allSubject = data.document.records;
        this.showLoadingIndicator = false;
      });
    }
  }

  onChangeSub(ev: any) {
    this.subId = ev.target.value;
    if (ev.target.value == 100) {
      this.showLoadingIndicator = false;
      this.allChapters = [];
    } else {
      this.showLoadingIndicator = true
      this.service.getChapterList(this.subId).subscribe((data) => {
        this.allChapters = data.document.records;
        this.showLoadingIndicator = false;
      });
    }
  }

  onChangeChapter(ev: any) {
    this.firstView = false;
    this.chapterId = ev.target.value;
    if (ev.target.value == 100) {
      this.showLoadingIndicator = false;
      this.examList = [];
    } else {
      this.showLoadingIndicator = true
      this.service.getExamList(this.chapterId).subscribe((data) => {
        ;

        this.examList = data.document.records;
        this.showData = true;
        console.log(this.examList);

        this.showLoadingIndicator = false;
      }, (error) => {
        console.error('error caught in component')
        this.errorMessage = error;
        this.examList = [];
        console.log(this.examList);
        this.showData = false;
        this.showLoadingIndicator = false;

      });
    }
  }

  goToUrl(id: string) {
    console.log(id);
    this._router.navigate(['/question', id]);
  }


}
