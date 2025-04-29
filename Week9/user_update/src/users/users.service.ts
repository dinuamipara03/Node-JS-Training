import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async create(userData: any): Promise<User> {
    if (Array.isArray(userData)) {
      throw new Error('Expected userData to be an object, but received an array.');
    }
    const user = this.usersRepo.create(userData);
  
    const ans = await this.usersRepo.save(user);
    if (Array.isArray(ans)) {
      throw new Error('Expected save to return a single user, but received an array.');
    }
    return ans;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepo.findOne({ where: { email } });
    if (!user) {
      throw new Error(`User with email ${email} not found.`);
    }
    return user;
  }

  // async findById(id: number): Promise<User> {
  //   const user = await this.usersRepo.findOne({ where: { id } });
  //   if (!user) {
  //     throw new Error(`User with id ${id} not found.`);
  //   }
  //   return user;
  // }
  async findById(id: number): Promise<User> {
    const user = await this.usersRepo.findOne({
      where: { id },
      select: ['id', 'firstName', 'lastName', 'email', 'password', 'mobile', 'photo'],
    });
    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }
    return user;
  }

  
  async updateUser(id: number, updateData: any): Promise<User> {
    await this.usersRepo.update(id, updateData);
    return this.findById(id);
  }
}
