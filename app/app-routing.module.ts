import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicknotesComponent } from './quicknotes/quicknotes.component';

const routes: Routes = [
  {path: 'quicknotes', component: QuicknotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[QuicknotesComponent]