import { NgModule } from '@angular/core';
import { ProcessOneComponent } from './process-one/process-one';
import { ProcessTwoComponent } from './process-two/process-two';
import { ProcessThreeComponent } from './process-three/process-three';
import { ProcessFourComponent } from './process-four/process-four';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ProcessFourComponent
  ],
  imports: [IonicModule],
	exports: [
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ProcessFourComponent
  ]
})
export class ComponentsModule {}
