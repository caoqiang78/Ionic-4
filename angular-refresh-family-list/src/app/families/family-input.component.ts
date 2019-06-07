import { Component } from '@angular/core';
import { FamiliesService } from './families.service';

@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent {
  family = '';

  constructor(private familiesService: FamiliesService) {}

  onAddFamilyName() {
    this.familiesService.addFamily(this.family);
    this.family = '';
    console.log(this.familiesService.families);
  }
}
