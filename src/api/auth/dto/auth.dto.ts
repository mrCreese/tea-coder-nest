import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT acsess token',
    example: 'er43eg466hjnf5FDdh9...',
  })
  accessToken: string;
}
