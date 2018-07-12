import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [FeaturesComponent],
  exports: [PaginationModule, BsDatepickerModule, FeaturesComponent]
})
export class CoreModule { }
