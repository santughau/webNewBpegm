import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservicesService } from '../shared/myservices.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  show: boolean = true;
  btnDissabled: boolean = true;
  questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "A",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these 1"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "B",
      options: [
        "Central Program Unit Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:",
        "Central Processing Unit Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:",
        "Central Preload Unit Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:",
        "None of these 2 Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "C",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these 3"
      ]
    }
  ];
  userAnswer: string = "";
  question_count = 0;
  points = 0;
  buttonTitle: string = 'Next';
  correctAnswer: number = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000 * 60)) / 1000);
  minutes = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  time = 0;
  formatted_sec: any = "00";
  formatted_min: any = "00";
  constructor(private router: Router, public service: MyservicesService) { }

  ngOnInit(): void {
    this.timer();

  }

  toggleClass(item?: any) {
    this.btnDissabled = false;
    console.log(item);
    if (item == 0) {
      this.userAnswer = "A"
    } else if (item == 1) {
      this.userAnswer = "B"
    } else if (item == 2) {
      this.userAnswer = "C"
    } else if (item == 3) {
      this.userAnswer == "D"
    }
    if (this.userAnswer == this.questions[this.question_count].answer) {
      this.correctAnswer++;
      this.service.mark.next(this.correctAnswer);
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
    setInterval(() => {
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
    console.log("Ranjana" + this.correctAnswer);

    if (this.question_count == this.questions.length - 1) {

      this.show = false;


    }
    if (this.question_count == this.questions.length - 2) {
      this.buttonTitle = "Finish";
    }

    this.question_count++;
  }

}
