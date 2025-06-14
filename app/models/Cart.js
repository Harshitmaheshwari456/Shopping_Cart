import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgsrc: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Cart ||
  mongoose.model("Cart", cartSchema);
