import { Location } from "./location.types.js"
import { City } from "./city.types.js"
import { HouseType } from "./houseTypes.types.js"
import { UserInfo } from "./userInfo.types.js"
import { Comfort } from "./comfort.types.js"

export type Offer = {
  id?: string,
  offerName: string,
  offerDesc: string,
  publicDate: Date,
  city: City,
  previewImage: string,
  foto: string[],
  isPrem: boolean,
  isFavorit: boolean,
  rating: number,
  typeHouse: HouseType,
  countRooms: number,
  countGuests: number,
  cost: number,
  comfort: Comfort[],
  afterOffer: UserInfo,
  commentCount: number,
  location: Location
}
