// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    expires: string;
    user: {
      id: number;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      gender: string;
      image: string;
      token: string;
    };
  }
}
