import { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'next-auth';

import { connect } from '../../../utils/database';

interface ResponseType {
  error: string;
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<User | ResponseType>
): Promise<void> => {
  if (request.method === 'POST') {
    const { image } = request.body;

    const db = await connect();

    const user = await db.collection('users').findOne({
      image,
    });

    return response.status(200).json(user);
  }

  return response.status(400).json({
    error: 'Internal Server Error',
  });
};
