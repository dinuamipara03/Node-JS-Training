import { ApiProperty, ApiBody, ApiQuery } from "@nestjs/swagger";
import { Body, Query } from "@nestjs/common";
    
export enum UserRole {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User',
}

export class CreateUserDto {

// @ApiBody({ type: [CreateUserDto] })
// createBulk(@Body() usersDto: CreateUserDto[]): void {
//     // Implement the logic for creating users in bulk
//     console.log('Creating users in bulk:', usersDto);
// }
@ApiQuery({ name: 'role', enum: UserRole })
async filterByRole(@Query('role') role: UserRole = UserRole.User) {}

@ApiProperty({ enum: ['Admin', 'Moderator', 'User']})
role: UserRole;

@ApiProperty({
        description: 'This is firstName',
        type: String,
    })
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    isActive?: boolean;
}
