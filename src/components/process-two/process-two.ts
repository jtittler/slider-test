import { Component } from '@angular/core';

/**
 * Generated class for the ProcessTwoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'process-two',
  templateUrl: 'process-two.html'
})
export class ProcessTwoComponent {

  text: string;

  constructor() {
    console.log('Hello ProcessTwoComponent Component');
    this.text = 'Hello World';
  }

}
