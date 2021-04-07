import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../shared/myservices.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
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
  homeworkList: any[] = [];
  errorMessage = "";
  showData: boolean = true;
  firstView: boolean = true;
  constructor(private service: MyservicesService) { }

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
      this.homeworkList = [];
    } else {
      this.showLoadingIndicator = true
      this.service.getHomeList(this.chapterId).subscribe((data) => {

        this.homeworkList = data.document.records;
        this.showData = true;
        console.log(this.homeworkList.length);

        this.showLoadingIndicator = false;
      }, (error) => {
        console.error('error caught in component')
        this.errorMessage = error;
        this.homeworkList = [];
        console.log(this.homeworkList);
        this.showData = false;
        this.showLoadingIndicator = false;

      });
    }
  }

}
