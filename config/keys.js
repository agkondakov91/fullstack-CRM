import dotenv from "dotenv";
dotenv.config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DB_NAME } =
  process.env;

if (!MONGO_USER || !MONGO_PASSWORD) {
  throw new Error(
    "Missing required environment variables for MongoDB connection"
  );
}

export default {
  mongoURI: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB_NAME}?retryWrites=true&w=majority`,
};
