import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    if (!req.headers) {
      throw new InternalServerErrorException('Headers not found');
    }

    return !data ? req.headers : req.headers[data];
  },
);
