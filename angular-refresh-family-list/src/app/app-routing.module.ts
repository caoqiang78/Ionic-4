import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamiliesComponent } from './families/families.component';
import { FamilyInputComponent } from './families/family-input.component';

const routes: Routes = [
  {path: '', component: FamiliesComponent},
  {path: 'input', component: FamilyInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
