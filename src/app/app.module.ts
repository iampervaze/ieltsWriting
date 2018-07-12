import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule, GlobalConfig } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { NavComponent } from './components/nav/nav.component';
import { ReviewComponent } from './components/review/review.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TaskComponent } from './components/task/task.component';
import { CoreModule } from './core/core.module';
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
    AppComponent,
    NavComponent,
    ReviewComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ToastrModule.forRoot(toastConfig),
    CKEditorModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
