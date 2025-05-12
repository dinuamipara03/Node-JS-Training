// src/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'; // Assuming you have an entity for User

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: '1', name: 'Tony', email: 'tony@example.com' },
    { id: '2', name: 'Jony', email: 'jony@example.com' },
    { id: '3', name: 'Mony', email: 'mony@example.com' },
    { id: '4', name: 'Jelly', email: 'jelly@example.com' },
    { id: '5', name: 'John', email: 'john@example.com' },
    { id: '6', name: 'Ram', email: 'Ram@example.com' },
    { id: '7', name: 'Ranni', email: 'ranni@example.com' },
    { id: '8', name: 'Roy', email: 'roy@example.com' },
    { id: '9', name: 'Tony', email: 'tonyy@example.com' },
  ];

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async findAll() {
    return this.users;
  }
}