/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://interviewDB_owner:qPNik5Es2IKb@ep-wandering-voice-a5az8u9y.us-east-2.aws.neon.tech/interviewDB?sslmode=require',
    }
  };