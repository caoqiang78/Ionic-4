import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onPlaceBooking() {
    this.modalCtrl.dismiss({message: 'Place an order!'}, 'confirm');
  }
}
