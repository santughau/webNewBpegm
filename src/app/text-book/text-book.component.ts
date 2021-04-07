import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../shared/myservices.service';
@Component({
  selector: 'app-text-book',
  templateUrl: './text-book.component.html',
  styleUrls: ['./text-book.component.css']
})
export class TextBookComponent implements OnInit {
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
  constructor(private service: MyservicesService,) { }

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

    } else {
      this.showLoadingIndicator = true;
      this.service.getSubjectList(this.classId).subscribe((data) => {
        this.allSubject = data.document.records;
        console.log(this.allSubject);
        this.showLoadingIndicator = false;
      });
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }



}
