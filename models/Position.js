import mongoose from "mongoose";
const Shema = mongoose.Shema;

const positionSchema = new Shema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  category: {
    ref: "categories",
    type: Shema.Types.ObjectId,
  },
  user: {
    ref: "users",
    type: Shema.Types.ObjectId,
  },
});

export default mongoose.model("positions", positionSchema);
