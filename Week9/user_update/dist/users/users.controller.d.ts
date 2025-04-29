import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("./user.entity").User>;
    updateUser(id: number, body: any, file: Express.Multer.File): Promise<import("./user.entity").User>;
}
