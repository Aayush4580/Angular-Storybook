import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input()
  primary: boolean = false;
  @Input()
  buttonText: string = '';
  @Input()
  varient: string = '';
  @Output()
  onPressButton: EventEmitter<any> = new EventEmitter();

  buttonClass: string = '';
  constructor() {}

  get classes() {
    let btnVarient: string = `btn-${this.varient}`;
    return ['button-container', btnVarient];
  }
}
