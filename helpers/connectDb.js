import mongoose from "mongoose";
import { app } from "../server.js";

export async function connectToDB() {
  mongoose.set({ strictQuery: false });
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () =>
      console.log(`Server up at http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
}
