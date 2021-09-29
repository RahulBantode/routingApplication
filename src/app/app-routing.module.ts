import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArithmeticComponent } from './component/arithmetic/arithmetic.component';
import { NumberComponent } from './component/number/number.component';
import { AppComponent } from './app.component';
const routes: Routes =
  [
    { path: " ", component: AppComponent },
    { path: "arithmetic", component: ArithmeticComponent },
    { path: 'number', component: NumberComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
