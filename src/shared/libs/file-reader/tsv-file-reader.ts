import { readFileSync } from "node:fs";
import { FileReader } from "./file-reader.interface.js";
import { Offer } from "../../types/offer.types.js";
import { City } from "../../types/city.types.js";
import { HouseType } from "../../types/houseTypes.types.js";
import { Comfort } from "../../types/comfort.types.js";

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor (
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray (): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([
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
      ]) => ({
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
      }))
  }
}

