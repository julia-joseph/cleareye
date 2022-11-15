import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/session-storage/session-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  employeeDetails: any;

  constructor(private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    this.employeeDetails = JSON.parse(
      this.sessionStorageService.getSessionItem('empItems')
    );
  }
}
