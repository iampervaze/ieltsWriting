import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule, GlobalConfig } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

const toastConfig: Partial<GlobalConfig> = {
  timeOut: 3000,
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  tapToDismiss: true,
  closeButton: true,
  progressAnimation: 'decreasing',
  progressBar: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ToastrModule.forRoot(toastConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
