import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'I am signup';
  }

  signin(){
    return 'I am signin';
  }
}
