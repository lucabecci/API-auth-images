import { model, Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  age: number;
  from: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
    },
    from: {
      type: String,
      trim: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUser>("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
