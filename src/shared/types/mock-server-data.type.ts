export type MockServerData = {
  ids: string[],
  offerName: string[],
  offersDesc: string[],
  publicDate: string[],
  city: string[],
  previewImage: string[],
  isPrem: boolean[],
  isFavorit: [true,false],
  rating: string[],
  typeHouse: string[],
  countRooms: string[],
  countGuests: string[],
  costs: string[],
  comfort: string[],
  author: Author,
  locations: string[]
}

type Author = {
  name: string[],
  type: string[],
  avatarUrl: string[],
  email: string[],
  password: string[]
}
