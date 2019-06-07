import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {
  familyChanged = new Subject<string[]>();
  families = ['John', 'June', 'Emma', 'Sky'];

  addFamily(familyName) {
    this.families.push(familyName);
  }

  removeFamily(familyName) {
    this.families = this.families.filter(family => family !== familyName);
    this.familyChanged.next(this.families);
  }
}
