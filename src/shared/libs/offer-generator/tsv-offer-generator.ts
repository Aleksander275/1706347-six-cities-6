import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem } from '../../helpers/index.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor (
    private readonly mockData: MockServerData
  ){}

  public generate(): string {
    const id = getRandomItem<string>(this.mockData.ids);
    const offerName = getRandomItem<string>(this.mockData.offerName);
    const offerDesc = getRandomItem<string>(this.mockData.offersDesc);
    const city = getRandomItem<string>(this.mockData.city);
    const previewImage = getRandomItem<string>(this.mockData.previewImage);
    const isPrem = getRandomItem<boolean>(this.mockData.isPrem);
    const isFavorit = getRandomItem<boolean>(this.mockData.isFavorit);
    const rating = getRandomItem<string>(this.mockData.rating);
    const typeHouse = getRandomItem<string>(this.mockData.typeHouse);
    const countRooms = getRandomItem<string>(this.mockData.countRooms);
    const countGuests = getRandomItem<string>(this.mockData.countGuests);
    const cost = getRandomItem<string>(this.mockData.costs);
    const comfort = getRandomItem<string>(this.mockData.comfort);
    const location  = getRandomItem<string>(this.mockData.locations);
    const author = {
      name: getRandomItem<string>(this.mockData.author.name),
      type: getRandomItem<string>(this.mockData.author.type),
      avatarUrl: getRandomItem<string>(this.mockData.author.avatarUrl),
      email: getRandomItem<string>(this.mockData.author.email),
      password: getRandomItem<string>(this.mockData.author.password)
    }

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const currentAuthor = Object.values(author).join(';');

    return [
      id,
      offerName,
      offerDesc,
      createdDate,
      city,
      previewImage,
      isPrem,
      isFavorit,
      rating,
      typeHouse,
      countRooms,
      countGuests,
      cost,
      comfort,
      currentAuthor,
      location
    ].join('\t');
  }
}
