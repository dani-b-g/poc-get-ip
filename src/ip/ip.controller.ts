import { Controller, Get, Req } from '@nestjs/common';
import e, { Request } from 'express';

@Controller('ip')
export class IpController {
  @Get()
  getClientIp(@Req() request: Request): {
    clientIp: string;
    forwardedIps: string[];
  } {
    const xForwardedFor = request.headers['x-forwarded-for'] as string;
    const forwardedIps = xForwardedFor
      ? xForwardedFor.split(',').map((ip) => ip.trim())
      : [];
    const clientIp = request.socket.remoteAddress || '';

    return {
      clientIp,
      forwardedIps,
    };
  }
}
