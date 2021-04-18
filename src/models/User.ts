import Adapters, { TypeORMUserModel } from 'next-auth/adapters';
import { EntitySchemaColumnOptions } from 'typeorm';

type UserSchema = {
  name: string;
  target: typeof User;
  columns: {
    level: EntitySchemaColumnOptions;
    currentExperience: EntitySchemaColumnOptions;
    completedChallenges: EntitySchemaColumnOptions;
    name?: EntitySchemaColumnOptions;
    email?: EntitySchemaColumnOptions;
    image?: EntitySchemaColumnOptions;
    emailVerified?: EntitySchemaColumnOptions;
  };
};

export default class User extends (Adapters.TypeORM.Models.User
  .model as typeof TypeORMUserModel) {
  level: number;

  currentExperience: number;

  completedChallenges: number;

  constructor(
    name: string,
    email: string,
    image: string,
    emailVerified: Date,
    level: number,
    currentExperience: number,
    completedChallenges: number
  ) {
    super(name, email, image, emailVerified);

    if (name) {
      this.name = name;
    }

    if (email) {
      this.email = email;
    }

    if (image) {
      this.image = image;
    }

    if (emailVerified) {
      const currentDate = new Date();

      this.emailVerified = currentDate;
    }

    this.level = level || 1;

    this.currentExperience = currentExperience || 0;

    this.completedChallenges = completedChallenges || 0;
  }
}

export const UserSchema: UserSchema = {
  ...Adapters.TypeORM.Models.User.schema,
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    level: {
      type: 'int',
    },
    currentExperience: {
      type: 'int',
    },
    completedChallenges: {
      type: 'int',
    },
  },
};
