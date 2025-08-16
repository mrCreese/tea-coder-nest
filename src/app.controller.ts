import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';
import { ClientIp, UserAgent } from './common/decorators/http.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':code')
  async getLinkByShortCode(
    @Param('code') code: string,
    @Res({ passthrough: true }) res: Response,
    @ClientIp() ip: string,
    @UserAgent() userAgent: string,
  ) {
    const link = await this.appService.getLinkByShortCode(code);

    await this.appService.trackClick(link.shortCode, ip, userAgent);

    return res.redirect(link.originalUrl);
  }
}
