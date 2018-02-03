import { Component } from '@angular/core';

/**
 * Generated class for the ProcessThreeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'process-three',
  templateUrl: 'process-three.html'
})
export class ProcessThreeComponent {

  text: string;

  constructor() {
    console.log('Hello ProcessThreeComponent Component');
    this.text = 'Hello World';
  }

}
