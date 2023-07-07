import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    resolved: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      // type: "draft" | "published", // either draft or published
      required: true,
    },
    assignedTo: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model("Tickets", ticketSchema);
