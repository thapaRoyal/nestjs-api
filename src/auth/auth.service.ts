import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto): Promise<User> {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      // save the new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // remove the hash from the user object before returning it
      delete user.hash;

      return user;
    } catch (error) {
      // if the email is already taken, throw a BadRequestException with the error message
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw new BadRequestException('Email already taken');
      }

      // re-throw the error if it's not related to the email being already taken
      throw error;
    }
  }

  signin() {
    return 'I am signin';
  }
}
