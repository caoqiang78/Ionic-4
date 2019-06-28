import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99
    )
  ];

  private _offers: Offer[] = [
    new Offer(
      'o1',
      '10% off',
      'This offer provides 10% off'
    ),
    new Offer(
      'o2',
      '25% off',
      'This offer provides 25% off'
    ),
    new Offer(
      'o3',
      '50% off',
      'This offer provides 50% off'
    )
  ];

  get places() {
    return [...this._places];
  }

  get offers() {
    return [...this._offers];
  }
  constructor() { }

  getOffer(id: string): Offer {
    return {...this._offers.find(offer => offer.id === id)};
  }

  getPlace(id: string): Place {
    return {...this._places.find(place => place.id === id)};
  }
}
