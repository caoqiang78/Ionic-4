import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
=======
  private personListSubs: Subscription;
>>>>>>> ca8aa877ff23b5ae6278989e12ec5307c06ad5c1
  personList: string[];
  private personListSubscription: Subscription;

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personList = this.personsService.persons;
<<<<<<< HEAD
    this.personListSubscription = this.personsService.personsChanged.subscribe( persons => { this.personList = persons; } );
=======
    this.personListSubs = this.personsService.personsChanged.subscribe(persons => this.personList = persons);
>>>>>>> ca8aa877ff23b5ae6278989e12ec5307c06ad5c1
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }

  ngOnDestroy() {
<<<<<<< HEAD
    this.personListSubscription.unsubscribe();
=======
    this.personListSubs.unsubscribe();
>>>>>>> ca8aa877ff23b5ae6278989e12ec5307c06ad5c1
  }
}
