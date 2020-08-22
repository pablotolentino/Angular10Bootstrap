import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { PreviewComponent } from './preview/preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PruebaComponent, PreviewComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[    
      PruebaComponent,
      PreviewComponent
  ]
})
export class SharedModule { }
