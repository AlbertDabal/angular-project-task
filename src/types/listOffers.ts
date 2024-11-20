import { Product } from './product';

export interface ListOffers {
  _embedded: {
    kinguinOffer: Product[];
  };
}
