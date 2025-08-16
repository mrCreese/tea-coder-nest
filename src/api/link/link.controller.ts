import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { LinkService } from './link.service';
import { Authorization, Authorized } from 'src/common/decorators';
import { CreateLinkDto } from './dto';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Authorization()
  @Post()
  async create(@Body() dto: CreateLinkDto, @Authorized('id') id: string) {
    return await this.linkService.create(dto, id);
  }
  @Authorization()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.linkService.delete(id);
  }
}
