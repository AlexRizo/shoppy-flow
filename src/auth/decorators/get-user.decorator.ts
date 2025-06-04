import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

type Data = 'email' | 'id' | 'nickname' | undefined;

export const GetUser = createParamDecorator(
  (data: Data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      throw new InternalServerErrorException('User not found');
    }

    return !data ? user : user[data];
  },
);
