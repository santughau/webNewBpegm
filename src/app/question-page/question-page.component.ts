import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservicesService } from '../shared/myservices.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  show: boolean = false;
  btnDissabled: boolean = true;
  questions: any = [];
  district: any[] = [];
  taluka: any[] = [];
  userAnswer: string = "";
  question_count = 0;
  buttonTitle: string = 'Next';
  correctAnswer: number = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000 * 60)) / 1000);
  minutes = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  time = 0;
  formatted_sec: any = "00";
  formatted_min: any = "00";
  stopTimer: any;
  distId: number = 0;
  result = {
    fullName: '',
    mobile: '',
    dist: '',
    tal: '',
  };
  constructor(private router: Router, public service: MyservicesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userAnswer = "";
    this.question_count = 0;
    this.correctAnswer = 0;
    this.formatted_min = "00";
    this.formatted_sec = "00";
    this.time = 0;
    this.questions = [];
    this.district = [];
    this.taluka = [];
    this.distId = 0;
    const id = +this._route.snapshot.params['id'];
    this.service.getQuestionList(id).subscribe((res) => {
      this.questions = res.document.records;
    })
    this.timer();
    this.service.getDistrictList().subscribe((data) => {
      this.district = data.document.records;

    })
  }

  toggleClass(item?: any) {
    this.btnDissabled = false;
    if (item == 0) {
      this.userAnswer = "A"
    } else if (item == 1) {
      this.userAnswer = "B"
    } else if (item == 2) {
      this.userAnswer = "C"
    } else if (item == 3) {
      this.userAnswer = "D"
    } else {

    }


    if (this.userAnswer == this.questions[this.question_count].answer) {
      this.correctAnswer++;
      let options = document.querySelectorAll("div.option");

      let indicator = document.querySelectorAll(".answers-indicator div");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("correct");
        options[i].classList.add("already-answered");

      }
      options[item].classList.add("correct");
      indicator[this.question_count].classList.add("correct");

    } else {
      let options = document.querySelectorAll("div.option");
      let indicator = document.querySelectorAll(".answers-indicator div");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("wrong");
        options[i].classList.add("already-answered");
      }
      options[item].classList.add("wrong");
      indicator[this.question_count].classList.add("wrong");
      if (this.questions[this.question_count].answer == 'A') {
        setTimeout(() => {
          options[0].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'B') {
        setTimeout(() => {
          options[1].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'C') {
        setTimeout(() => {
          options[2].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'D') {
        setTimeout(() => {
          options[3].classList.add("correct");
        }, 2000)
      }
    }
  }

  timer() {
    this.stopTimer = setInterval(() => {
      this.time++;
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
      this.formatted_sec = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
      this.formatted_min = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`
    }, 1000)
  }

  next() {
    this.btnDissabled = true;
    if (this.question_count == this.questions.length - 1) {
      this.show = false;
    }
    if (this.question_count == this.questions.length - 2) {
      this.buttonTitle = "Finish";
      clearInterval(this.stopTimer);
    }
    this.question_count++;
  }

  onChangeDistrict(id: any) {
    this.distId = id.target.value;
    if (this.distId != null) {
      this.taluka = [];
      this.service.getTalukaList(this.distId).subscribe((data) => {
        this.taluka = data.document.records;
      })
    }


  }

}
