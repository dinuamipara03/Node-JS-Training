// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/user.input';
import { User } from './dto/user.output';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  private nextId = 1;

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user: User = {
      id: String(this.nextId++),
      ...createUserInput,
    };
    this.users.push(user);
    return user;
  }
}