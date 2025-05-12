import { UsersService } from './users.service';
import { User } from './entities/user.entity';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    user(id: string): Promise<User>;
    allUser(): Promise<User[]>;
}
