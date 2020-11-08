import { Schema, model, Document } from "mongoose";

interface IImage extends Document {
  title: string;
  description: string;
  imagePath: string;
  user_id: number;
}

const imageSchama: Schema = new Schema(
  {
    title: {
      type: String,
      minlength: 2,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      minlength: 2,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
      trim: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IImage>("Image", imageSchama);
