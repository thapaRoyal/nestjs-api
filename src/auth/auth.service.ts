import { Injectable } from '@nestjs/common';
import {User, Bookmark} from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService){}
  signup() {
    return 'I am signup';
  }

  signin(){
    return 'I am signin';
  }
}
