import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  private personListSubs: Subscription;
  personList: string[];

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personList = this.personsService.persons;
    this.personListSubs = this.personsService.personsChanged.subscribe(persons => this.personList = persons);
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
