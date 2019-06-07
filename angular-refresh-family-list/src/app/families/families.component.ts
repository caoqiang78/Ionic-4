import { Component, OnInit, OnDestroy } from '@angular/core';
import { FamiliesService } from './families.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})
export class FamiliesComponent implements OnInit, OnDestroy {
  private familiesSubscription: Subscription;
  families: string[];

  constructor(private familiesService: FamiliesService) {}

  ngOnInit() {
    this.families = this.familiesService.families;
    this.familiesSubscription = this.familiesService.familyChanged.subscribe(familiesList => this.families = familiesList);
  }

  onRemoveFamily(name) {
    this.familiesService.removeFamily(name);
    console.log(this.familiesService.families);
  }

  ngOnDestroy() {
    this.familiesSubscription.unsubscribe();
  }
}
