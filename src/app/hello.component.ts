import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
             <button (click) = "doIncrement()" >Increment value </button>
             <h2> Increment value is .. ngModel {{ valIncrement}} `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  valIncrement;
  constructor(private cService: CounterService) {}

  doIncrement() {
    console.log('User incremented the counter');
    this.cService.incermetValue(this.valIncrement);
  }

  ngOnInit() {
    this.cService.counterValue.subscribe((res) => {
      this.valIncrement = res;
      console.log('Value is ..', res);
    });
  }
}
