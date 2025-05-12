import { Query, Resolver } from '@nestjs/graphql';

@Resolver(of => String)
export class AppResolver{

    @Query(() => String)
    index():string{
        return "Nestjs GraphQl"
    }
}