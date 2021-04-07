import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../shared/myservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mark: any;
  min: any;
  sec: any;
  
  constructor(public service: MyservicesService) { }

  ngOnInit(): void {
    this.service.mark.subscribe((sec) => {
      console.log("mark " +this.mark);
      
      this.mark = sec;
    });
    this.service.min.subscribe((min) => {
      console.log("min " + this.min);

      this.min = min;
    });
    this.service.sec.subscribe((sec) => {
      console.log("sec " + this.sec);

      this.sec = sec;
    });
  }

}
