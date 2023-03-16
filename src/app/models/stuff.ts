export class Stuff {
  constructor(
      public name:string,
      public quantity:number,
      public dateEntered:Date,
      public purchasePrice:number,
      public store:string,
      public description:string,
      public searchTerms:string[],
      public photoURL:string,
      public expirationDate?:Date,
      public id?:string,
    ){
  };
}
