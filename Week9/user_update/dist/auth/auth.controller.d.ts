import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: any, file: Express.Multer.File): Promise<import("../users/user.entity").User>;
    login(body: any): Promise<{
        access_token: string;
    }>;
}
