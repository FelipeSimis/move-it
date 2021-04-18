import { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'next-auth';

import { connect } from '../../../utils/database';

interface ResponseType {
  error: string;
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<User[] | ResponseType>
): Promise<void> => {
  if (request.method === 'GET') {
    const db = await connect();

    const data: User[] = await db
      .collection('users')
      .find()
      .project({
        createdAt: 0,
        updatedAt: 0,
      })
      .sort({ level: -1 })
      .toArray();

    return response.status(200).json(data);
  }

  return response.status(400).json({
    error: 'Internal Server Error',
  });
};
