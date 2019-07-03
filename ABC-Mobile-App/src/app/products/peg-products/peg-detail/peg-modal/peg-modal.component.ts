import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peg-modal',
  templateUrl: './peg-modal.component.html',
  styleUrls: ['./peg-modal.component.scss'],
})
export class PegModalComponent implements OnInit {
  @Input() selectedPeg;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onPlaceOrder() {
    this.modalCtrl.dismiss({message: 'ORDERED!'}, 'confirm');
  }
}
