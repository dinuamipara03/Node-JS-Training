// src/users.resolver.ts
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity'; 

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    return await this.usersService.findById(id);
  }

  @Query(() => [User], { name: 'allUser' })
async allUser(): Promise<User[]> {
  return await this.usersService.findAll();
}
  
}