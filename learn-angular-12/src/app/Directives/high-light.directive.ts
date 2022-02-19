import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit  {
  //color = 'yellow';
  @Input('appHighLight') appHighLight!:string;

  constructor(private el: ElementRef) {
    //el.nativeElement.style.color = this.appHighLight;
    console.log('constructor:'+this.appHighLight);
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
    console.log('ngOnInit:'+this.appHighLight);
    //throw new Error('Method not implemented.');
  }
}
