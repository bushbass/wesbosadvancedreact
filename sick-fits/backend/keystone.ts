import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/Users';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/eystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credential: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // schema itmes go in here
    User,
  }),
  ui: {
    // change for roles
    isAccessAllowed: () => true,
  },
  // todo add session valuse here
});
