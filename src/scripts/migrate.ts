import connectToDatabase from '@/lib/MongoDBConnection';
import VoidRelic from '@/models/VoidRelic';

const migrate = async () => {
  await connectToDatabase();
  console.log('Connected to DB');

  await VoidRelic.createCollection();
  console.log('Created collection: void_relic');

  process.exit(0);
};

migrate().catch((err) => {
  console.error('Migration failed', err);
  process.exit(1);
});
