import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { BASE_URL } from '@/config/constants/api';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'username', type: 'username', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const res = await fetch(`${BASE_URL}auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user.id) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as never;
      return session;
    },
  },
  pages: {
    signIn: '/',
  },
};
