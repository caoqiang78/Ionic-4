import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = ['John', 'June', 'Emma', 'Sky'];

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    this.personsChanged.next(this.persons);
  }
}
