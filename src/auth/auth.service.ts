import { Injectable } from '@nestjs/common';
import {User, Bookmark} from '@prisma/client'

@Injectable({})
export class AuthService {
  signup() {
    return 'I am signup';
  }

  signin(){
    return 'I am signin';
  }
}
