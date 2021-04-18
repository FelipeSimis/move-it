import { Db, MongoClient } from 'mongodb';

let cachedDb: Db = null;

export async function connect(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('moveit');

  cachedDb = db;

  return db;
}
