import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Nguyen Hung Tinh';
  age = 22;
  traicay = ['tao', 'nho', 'chuoi', 'oi'];
  traicay2 = [
    { ten: 'tao', gia: -1, haGia: true },
    { ten: 'nho', gia: 24, haGia: false },
    { ten: 'oi', gia: 22, haGia: true },
  ];
  districtAll: string[]=['Chọn Quận Huyện'];
  vn = [
    { city: 'Chọn Tỉnh Thành Phố', district: ['Chọn Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành Phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'An Giang1',
      district: [
        'Thành Phố Long Xuyên1',
        'Thành phố Châu Đốc1',
        'Thị xã Tân Châu1',
        'Huyện An Phú1',
        'Huyện Châu Phú1',
        'Huyện Châu Thành1',
        'Huyện Chợ Mới1',
        'Huyện Phú Tân1',
        'Huyện Thoại Sơn1',
        'Huyện Tịnh Biên1',
        'Huyện Tri Tôn1',
      ],
    },
    {
      city: 'An Giang2',
      district: [
        'Thành Phố Long Xuyên2',
        'Thành phố Châu Đốc2',
        'Thị xã Tân Châu2',
        'Huyện An Phú2',
        'Huyện Châu Phú2',
        'Huyện Châu Thành2',
        'Huyện Chợ Mới2',
        'Huyện Phú Tân2',
        'Huyện Thoại Sơn2',
        'Huyện Tịnh Biên2',
        'Huyện Tri Tôn2',
      ],
    },
    {
      city: 'An Giang3',
      district: [
        'Thành Phố Long Xuyên3',
        'Thành phố Châu Đốc3',
        'Thị xã Tân Châu3',
        'Huyện An Phú3',
        'Huyện Châu Phú3',
        'Huyện Châu Thành3',
        'Huyện Chợ Mới3',
        'Huyện Phú Tân3',
        'Huyện Thoại Sơn3',
        'Huyện Tịnh Biên3',
        'Huyện Tri Tôn3',
      ],
    },
  ];
  counter!: number;
  counter2!: number;
  constructor( private common:CommonService) {}

  ngOnInit(): void {
    console.log(this.traicay);
    //this.districtAll=['Chọn Quận Huyện'];
    this.counter = this.common.counter+2;
    this.counter2 = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
  resetName() {
    this.name = 'Nguyen Hung Tinh';
  }
  changeData(event: any) {
    let city = event.target.value;
    let choose = this.vn.filter((data) => data.city === city);
    if (city && city.length > 0) {
      this.districtAll = choose[0].district;
      console.log(choose[0].district);
    }
  }
}
