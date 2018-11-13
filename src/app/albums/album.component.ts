export interface IAlbum {
  albumId: number;
  albumName: string;
  artist: string;
  genre: string;
  releaseDate: string;
  price: number;
  rating: number;
  image: string;
}

// export class Album implements IAlbum {
//   constructor(
//     public albumId: number,
//     public albumName: string,
//     public artist: string,
//     public genre: string,
//     public releaseDate: string,
//     public price: number,
//     public rating: number,
//     public image: string
//   ) {

//   }

//   someFunction(someValue: number): number {
//     return "some calculation value";
//   }
// }
