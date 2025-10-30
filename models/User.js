import mongoose from "mongoose";
const Shema = mongoose.Shema;

const userShema = new Shema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("users", userShema);
