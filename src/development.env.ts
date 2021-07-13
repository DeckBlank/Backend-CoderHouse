import USER_CREDENTIALS from "./user-credentials.env";

export default {
  HOST: process.env.HOST || "http://localhost",
  PORT: process.env.PORT || 4000,
  MONGODB_URI: `mongodb+srv://${USER_CREDENTIALS.USERNAME}:${USER_CREDENTIALS.PASSWORD}@cluster0.uixuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
