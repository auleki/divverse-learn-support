import { Router } from "express";
import {
  createTicket,
  deleteTicket,
  getSingleTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticket.controller.js";

const router = Router();

router.get("/", getTickets);
router.get("/:id", getSingleTicket);
router.post("/", createTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;
