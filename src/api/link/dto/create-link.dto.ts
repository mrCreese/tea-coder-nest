import { IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsUrl()
  originalUrl: string;
}
