import { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../../utils/database';

interface GenericResponseType {
  [key: string]: string;
}

interface ExperienceData {
  currentExperience: number;
  experienceToNextLevel: number;
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<GenericResponseType | ExperienceData>
): Promise<void> => {
  if (request.method === 'PATCH') {
    const { image, amountExperience } = request.body;

    const db = await connect();

    const user = await db.collection('users').findOne({
      image,
    });

    const query = { image };

    const experienceToNextLevel = Math.pow((user.level + 1) * 4, 2);

    const newCurrentExperience = user.currentExperience + amountExperience;
    const userLevel = user.level;

    if (newCurrentExperience >= experienceToNextLevel) {
      const update = {
        $set: {
          currentExperience: newCurrentExperience - experienceToNextLevel,
          level: userLevel + 1,
          completedChallenges: user.completedChallenges + 1,
        },
      };

      await db.collection('users').updateOne(query, update);

      return response.status(200).json({
        message: 'User experience has been updated successfully',
      });
    }

    const update = {
      $set: {
        currentExperience: newCurrentExperience,
        completedChallenges: user.completedChallenges + 1,
      },
    };

    await db.collection('users').updateOne(query, update);

    return response.status(200).json({
      message: 'User experience has been updated successfully',
    });
  }

  return response.status(400).json({
    error: 'Internal Server Error',
  });
};
