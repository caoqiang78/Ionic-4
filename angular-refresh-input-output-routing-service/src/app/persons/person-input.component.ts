import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  personName: string;

  constructor(private personsService: PersonsService) {}

  onCreatePerson() {
    console.log('The added name is: ' + this.personName);
    this.personsService.addPerson(this.personName);
    this.personName = '';
  }
}
