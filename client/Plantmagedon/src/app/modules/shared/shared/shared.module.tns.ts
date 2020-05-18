import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWrapperComponent } from '../image-wrapper/image-wrapper.component';



@NgModule({
  declarations: [ImageWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImageWrapperComponent
  ]
})
export class SharedModule { }
