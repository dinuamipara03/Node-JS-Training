export declare enum UserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}
export declare class CreateUserDto {
    filterByRole(role?: UserRole): Promise<void>;
    role: UserRole;
    firstName: string;
    lastName: string;
    isActive?: boolean;
}
