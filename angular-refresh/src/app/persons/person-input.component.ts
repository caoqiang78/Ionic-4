import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  personName: string;
  @Output() personCreate = new EventEmitter<string>();

  onCreatePerson() {
    console.log('The added name is: ' + this.personName);
    this.personCreate.emit(this.personName);
    this.personName = '';
  }
}
