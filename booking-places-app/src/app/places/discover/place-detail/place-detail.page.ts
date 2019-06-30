import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { CreateBookComponent } from 'src/app/bookings/create-book/create-book.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  currentPlace: Place;

  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private placesService: PlacesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeID')) {
        this.navCtrl.navigateBack('/places/discover');
        return;
      }

      this.currentPlace = this.placesService.getPlace(paraMap.get('placeID'));
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl
    .create({
      component: CreateBookComponent,
      componentProps: { selectedPlace: this.currentPlace }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked!');
      }
    });
  }
}
