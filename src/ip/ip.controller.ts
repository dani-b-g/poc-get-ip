import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('ip')
export class IpController {
  @Get()
  getClientIp(@Req() request: Request): string {
    const xForwardedFor = request.headers['x-forwarded-for'];
    const ip = Array.isArray(xForwardedFor)
      ? xForwardedFor[0]
      : xForwardedFor?.split(',').shift();
    return ip || request.socket.remoteAddress;
  }
}
