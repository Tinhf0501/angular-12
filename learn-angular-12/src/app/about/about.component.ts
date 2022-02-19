import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  color = 'red';
  loginName: string = 'user';
  counter!: number;
  counter2!: number;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter+2;
    this.counter2 = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
}
