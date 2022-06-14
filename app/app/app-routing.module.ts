import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuicknotesComponent } from './quicknotes/quicknotes.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'quicknotes', component: QuicknotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }