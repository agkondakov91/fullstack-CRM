import mongoose from "mongoose";
const Shema = mongoose.Shema;

const orderShema = new Shema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: true,
  },
  list: [
    {
      name: {
        type: String,
      },
      cost: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },
  ],
  user: {
    ref: "users",
    type: Shema.Types.ObjectId,
  },
});

export default mongoose.model("orders", orderShema);
