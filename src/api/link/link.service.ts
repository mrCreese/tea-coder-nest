import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateLinkDto } from './dto';
import { randomBytes } from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LinkService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async create(dto: CreateLinkDto, userId: string) {
    const { originalUrl } = dto;

    const shortCode = randomBytes(5).toString('hex');

    const link = await this.prismaService.link.create({
      data: { originalUrl, shortCode, user: { connect: { id: userId } } },
    });

    const shortUrl = `${this.configService.getOrThrow<string>('APP_URl')}/${link.shortCode}`;

    return { url: shortUrl };
  }

  async delete(id: string) {
    const link = await this.prismaService.link.findUnique({ where: { id } });

    if (!link) throw new NotFoundException('Link non trovato');

    await this.prismaService.link.delete({ where: { id: link.id } });

    return true;
  }
}
