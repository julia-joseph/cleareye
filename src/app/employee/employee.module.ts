import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormComponent } from './components/form/form.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [FormComponent, DetailsComponent],
  imports: [CommonModule, EmployeeRoutingModule, ReactiveFormsModule],
})
export class EmployeeModule {}
