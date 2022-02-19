import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  counter = 0;
  constructor() {}
  binhPhuong(n:number){
    return n*n;
  }
}
