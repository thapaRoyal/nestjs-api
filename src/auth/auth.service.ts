import { Injectable } from '@nestjs/common';
import {User, Bookmark} from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService){}
  signup(dto: AuthDto) {
    
    return 'I am signup';
  }

  signin(){
    return 'I am signin';
  }
}
