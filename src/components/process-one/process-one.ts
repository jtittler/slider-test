import { Component } from '@angular/core';

/**
 * Generated class for the ProcessOneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'process-one',
  templateUrl: 'process-one.html'
})
export class ProcessOneComponent {

  text: string;

  constructor() {
    console.log('Hello ProcessOneComponent Component');
    this.text = 'Hello World';
  }

}
