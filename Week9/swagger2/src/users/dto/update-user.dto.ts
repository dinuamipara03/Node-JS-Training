import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
        @ApiProperty()
        firstName: string;
    
        @ApiProperty()
        lastName: string;
    
        @ApiProperty()
        isActive?: boolean;
    }
