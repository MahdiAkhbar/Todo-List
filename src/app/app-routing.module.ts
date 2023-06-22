import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { PendingComponent } from './components/pending/pending.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'completed', component: CompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
