import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth.guard';

export function Authorization() {
  return applyDecorators(UseGuards(JwtGuard));
}
