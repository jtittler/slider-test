import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Test1Page } from '../test1/test1';
import { Test2Page } from '../test2/test2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test1Pg: any;
  test2Pg: any;

  constructor(public navCtrl: NavController) {
    this.test1Pg = Test1Page;
    this.test2Pg = Test2Page;
  }

}
