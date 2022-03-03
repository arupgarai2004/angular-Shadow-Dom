import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <h2> Hello component</h2>
    <div class="none-message">No encapsulation</div>
    <h3>Shadow DOM</h3>
    <div class="shadow-message">Shadow DOM encapsulation</div>`,
  styles: [`h2,  .none-message {    color: red;  }
  'h3, .shadow-message { color: blue; }
  `],
  encapsulation: ViewEncapsulation.None, //none globally , Emulated only component
})
export class HelloComponent {
  @Input() name: string;
}

