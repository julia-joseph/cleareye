import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/shared/services/session-storage/session-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    role: new FormControl('Admin', [Validators.required]),
    phones: new FormArray([new FormControl('')], [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  roles: string[] = ['Admin', 'Manager', 'HR', 'Developer'];

  get phones() {
    return this.employeeForm.get('phones') as FormArray;
  }

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm.valueChanges.forEach((v) => {
      console.log('value changes', v);
      console.log('frm', this.employeeForm);
      console.log('', this.employeeForm.get('address')?.getError('required'));
    });
  }

  addPhone() {
    this.phones.push(new FormControl(''));
  }

  onSubmit() {
    this.sessionStorageService.updateSessionItem(
      'empItems',
      this.employeeForm.value
    );
    this.router.navigate(['/details']);
  }
}
