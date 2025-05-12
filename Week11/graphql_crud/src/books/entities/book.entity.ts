import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  id:number;
  title:string;
  price:number;
}
