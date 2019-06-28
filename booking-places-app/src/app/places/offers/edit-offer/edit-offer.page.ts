import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../../offer.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  currentOffer: Offer;

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute, private navCtrol: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrol.navigateBack('/places/tabs/offers');
        return;
      }
      this.currentOffer = this.placesService.getOffer(paraMap.get('placeId'));
    });
  }

}
