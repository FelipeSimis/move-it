import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';

import Models from '../../../models';

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  await NextAuth(request, response, {
    pages: {
      signIn: '/auth/login',
    },
    providers: [
      Providers.GitHub({
        clientId: String(process.env.GITHUB_CLIENT_ID),
        clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
      }),
    ],
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    database: process.env.DATABASE_URL,
    adapter: Adapters.TypeORM.Adapter(
      {
        type: 'mongodb',
        url: process.env.DATABASE_URL,
        useUnifiedTopology: true,
      },
      {
        models: {
          User: Models.User,
        },
      }
    ),
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
