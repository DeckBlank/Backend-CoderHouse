import { ConnectionOptions } from "mongoose";

const MongooseOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export default MongooseOptions;
