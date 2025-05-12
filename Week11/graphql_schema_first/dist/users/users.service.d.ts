import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly users;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
}
