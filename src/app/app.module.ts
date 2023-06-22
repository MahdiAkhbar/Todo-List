import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { CompletedComponent } from './components/completed/completed.component';
import { PendingComponent } from './components/pending/pending.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CompletedComponent,
    PendingComponent,
    TasksComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
