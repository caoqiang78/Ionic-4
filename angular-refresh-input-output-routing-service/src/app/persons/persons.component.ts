import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubscription: Subscription;

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personList = this.personsService.persons;
    this.personListSubscription = this.personsService.personsChanged.subscribe( persons => { this.personList = persons; } );
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }

  ngOnDestroy() {
    this.personListSubscription.unsubscribe();
  }
}
