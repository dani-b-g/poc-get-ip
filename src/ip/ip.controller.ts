import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('ip')
export class IpController {
  @Get()
  getClientIp(@Req() request: Request): string {
    const clientIp =
      request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    return typeof clientIp === 'string' ? clientIp : clientIp[0];
  }
}
