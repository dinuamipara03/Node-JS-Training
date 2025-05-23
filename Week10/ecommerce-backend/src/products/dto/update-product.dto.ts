import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString, IsNumber, IsArray, IsIn, ValidateIf } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  category?: 'Clothing' | 'Electronics' | 'Beauty & Personal Care' | 'Sports & Outdoors' | 'Books' | 'Toys & Games' ;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
