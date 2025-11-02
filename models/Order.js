import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model("orders", orderSchema);
