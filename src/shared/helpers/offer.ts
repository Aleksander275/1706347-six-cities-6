import { Offer } from '../types/index.js';
import { City } from '../types/index.js';
import { HouseType } from '../types/index.js';
import { Comfort } from '../types/index.js';

export function createOffer (offerData: string): Offer {

  const [
    id,
    offerName,
    offerDesc,
    publicDate,
    city,
    previewImage,
    foto,
    isPrem,
    isFavorit,
    rating,
    typeHouse,
    countRooms,
    countGuests,
    cost,
    comfort,
    afterOffer,
    commentCount,
    location
  ] = offerData.replace('/n', '').split('\n');

  return {
    id,
    offerName,
    offerDesc,
    publicDate: new Date(publicDate),
    city: city as City,
    previewImage,
    foto: foto.split(';'),
    isPrem: !!isPrem,
    isFavorit: !!isFavorit,
    rating: +rating,
    typeHouse: typeHouse as HouseType,
    countRooms: +countRooms,
    countGuests: +countGuests,
    cost: +cost,
    comfort: comfort.split(';') as Comfort[],
    afterOffer: {
      name: afterOffer.split(';')[0],
      type: afterOffer.split(';')[1] as 'Pro ' | 'Standard',
      avatarUrl: afterOffer.split(';')[2],
      email: afterOffer.split(';')[3],
      password: afterOffer.split(';')[4],
    },
    commentCount: +commentCount,
    location: {
      latitude: +location.split(';')[0],
      longitude: +location.split(';')[1],
    }
  };
}
