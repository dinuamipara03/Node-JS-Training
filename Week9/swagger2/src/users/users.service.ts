import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
  const user = new User();
  user.firstName = createUserDto.firstName;
  user.lastName = createUserDto.lastName;
  user.isActive = createUserDto.isActive ?? false;
  this.usersRepository.save(user);
    return `This action adds a new user with data: ${JSON.stringify(createUserDto)}`;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<string> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    user.firstName = updateUserDto.firstName ?? '';
    user.lastName = updateUserDto.lastName ?? '';
    user.isActive = updateUserDto.isActive ?? false;
    await this.usersRepository.save(user);
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<string> {
    await this.usersRepository.delete(id);
    return `This action removes a #${id} user`;
  }
}
