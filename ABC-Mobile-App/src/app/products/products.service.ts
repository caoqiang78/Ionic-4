import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _peg: Product[] = [
    new Product(
      'HEP2101',
      'AC-PEG-Alkyne',
      'α-Acryloyl-ω-alkynyl poly(ethylene glycol) (MW: 2kDa, 3.5kDa, 5kDa, 10kDa, 20kDa)',
      'https://advancedbiochemicals.com/wp-content/uploads/2016/01/Acrylate-PEG-Alkyne1.jpg',
      100
    ),
    new Product(
      'HEP1701',
      'AC-PEG-COOH',
      'α-Acryloyl-ω-carboxyl poly(ethylene glycol) (MW: 2kDa, 3.5kDa, 5kDa, 10kDa, 20kDa)',
      'https://advancedbiochemicals.com/wp-content/uploads/2016/01/Acrylate-PEG-COOH1.jpg',
      200
    ),
    new Product(
      'HEP0801',
      'AC-PEG-OH',
      'α-Acryloyl-ω-hydroxyl poly(ethylene glycol) (MW: 2kDa, 3.5kDa, 5kDa, 10kDa, 20kDa)',
      'https://advancedbiochemicals.com/wp-content/uploads/2016/01/Acrylate-PEG-OH1.jpg',
      300
    )
  ];
  private _elisa: Product[]=[
    new Product(
      'ABCE-EL-H1740',
      'Anti-sperm Antibody (ASA) IgM',
      'Human Anti-sperm Antibody (ASA) IgM',
      'https://163602-560839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/02/Sandwich-ELISA-Steps-and-Advantages.jpg',
      488
    ),
    new Product(
      'ABCE-EL-H0008',
      'ANG2 (Angiopoietin 2) ELISA Kit',
      'Human ANG2 (Angiopoietin 2) ELISA Kit',
      'https://www.sepmag.eu/hubfs/sandwich%20elisa.png',
      688
    ),
    new Product(
      'ABCE-EL-H0020',
      'MCP-1 (Monocyte Chemotactic Protein 1) ELISA Kit',
      'Human MCP-1 (Monocyte Chemotactic Protein 1) ELISA Kit',
      'https://laboratoryinfo.com/wp-content/uploads/2015/12/Indirect-elisa.png',
      888
    )
  ];
  private _intermediates: Product[]=[
    new Product(
      'CBD0030',
      'Bis(2,4-di-tert-butylphenyl)phosphate',
      'Bis(2,4-di-tert-butylphenylphosphate; bis(2,4-di-tert-butylphenyl) hydrogen phosphate',
      'https://advancedbiochemicals.com/wp-content/uploads/2015/10/Bis24-di-tert-butylphenylphosphate-e1458317366921.jpg',
      338
    ),
    new Product(
      'CBD0008',
      '1,​3-​Naphthalenediol',
      '1,​3-​Naphthalenediol; naphthalene-1,3-diol',
      'https://advancedbiochemicals.com/wp-content/uploads/2015/10/1%E2%80%8B3-%E2%80%8BNaphthalenediol-e1458314753693.jpg',
      448
    ),
    new Product(
      'CBD0022',
      '8-Oxo-3-azabicyclo[3,2,1]octane hydrochloride',
      '(1R,5S)-8-Oxa-3-azabicyclo[3.2.1]octane hydrochloride',
      'https://advancedbiochemicals.com/wp-content/uploads/2015/10/8-oxo-3-azabicyclo321octane-hydrochloride--e1458317184560.jpg',
      558
    )
  ];

  get peg() {
    return [...this._peg];
  }

  get elisa() {
    return [...this._elisa];
  }

  get intermediates() {
    return [...this._intermediates];
  }

  constructor() { }

  getPeg(pegID: string): Product {
    return {...this._peg.find(peg => peg.id === pegID)};
  }

  getElisa(elisaID: string): Product {
    return {...this._elisa.find(elisa => elisa.id === elisaID)};
  }

  getIntermediate(intermediateID: string): Product {
    return {...this._intermediates.find(intermediate => intermediate.id === intermediateID)};
  }
}
