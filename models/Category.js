import mongoose from "mongoose";
const Shema = mongoose.Shema;

const categorySchema = new Shema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  user: {
    ref: "user",
    type: Shema.Types.ObjectId,
  },
});

export default mongoose.model("categories", categorySchema);
