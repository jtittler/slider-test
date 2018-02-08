import { ProcessOneComponent } from '../../components/process-one/process-one';
import { ProcessThreeComponent } from './../../components/process-three/process-three';
import { ProcessTwoComponent } from './../../components/process-two/process-two';
import { ProcessFourComponent } from './../../components/process-four/process-four';

import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',
})
export class Test1Page {

  processItems = {
    items: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3,
        items: [
          {
            id: 4
          },
          {
            id: 3
          }
        ]
      },
      {
        id: 4
      }
    ]
  }

  pages = [];

  @ViewChild('processContainer', { read: ViewContainerRef }) container;
  componentRef;

  constructor(public navCtrl: NavController, private resolver: ComponentFactoryResolver) {
  }

  ionViewDidLoad() {
    this.createPageOrder(this.processItems.items);
  }

  createPageOrder(steps) {
    for (let item of steps) {
      if (item.items) {
        this.createPageOrder(item.items);
      } else {
        let comp = this.resolveComponents(item.id);
        const factory = this.resolver.resolveComponentFactory(comp);
        this.componentRef = this.container.createComponent(factory);
      }
    }
  }

  resolveComponents(id) {
    if (id === 1) {
      return ProcessOneComponent;
    } else if (id === 2) {
      return ProcessTwoComponent;
    } else if (id === 3) {
      return ProcessThreeComponent;
    } else if (id === 4) {
      return ProcessFourComponent;
    }
  }

}
