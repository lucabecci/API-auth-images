import dotenv from "dotenv";
dotenv.config();

export default {
  JWTsecret: process.env.JWT_TOKEN || "testsecrettoken",
  DB: {
    URI: process.env.DB_URI || "mongodb://localhost/authimages",
    USER: process.env.DB_USER || "",
    PASS: process.env.DB_PASS || "",
  },
  PORT: process.env.PORT || 5000,
};
