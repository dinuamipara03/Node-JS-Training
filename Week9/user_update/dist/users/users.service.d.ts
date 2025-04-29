import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    create(userData: any): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    updateUser(id: number, updateData: any): Promise<User>;
}
