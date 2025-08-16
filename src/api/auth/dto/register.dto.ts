import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @ApiProperty({
    description: 'Nome utente',
    example: 'John Doe',
    maxLength: 50,
  })
  @IsString({ message: 'Name must be string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(50, { message: 'Name length must have max 50 chatacters' })
  name: string;

  @ApiProperty({ description: 'Indirizzo email', example: 'example@mail.com' })
  @IsString({ message: 'Email must be string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email format not valid' })
  email: string;

  @ApiProperty({
    description: 'Password del utente',
    example: '123de45',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Password must be string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password mush have min 6 characters' })
  @MaxLength(128, { message: 'Password max length 128 symbols' })
  password: string;
}
