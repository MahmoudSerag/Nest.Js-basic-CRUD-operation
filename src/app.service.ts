import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPersonalInfo(): {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    status: string;
    isMarried: boolean;
    friends: string[];
    funFact: string;
  } {
    return {
      firstName: 'Mahmoud',
      middleName: 'Serag',
      lastName: 'Ismail',
      age: 23,
      status: 'Single',
      isMarried: false,
      friends: [
        'Mohamed',
        'Hussein',
        'Youssef',
        'Ziad',
        'Ahmed',
        'Mustafa',
        'Omar',
      ],
      funFact: 'My code has never bugs, Just create unexpected features.',
    };
  }
}
