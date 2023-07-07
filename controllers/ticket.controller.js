import Axios from "../helpers/axios.js";
import Ticket from "../models/ticket.model.js";

// fetch ticket
export const getTickets = async (req, res) => {
  try {
    // api call
    const result = await Ticket.find({});
    res.status(200).json(result);
  } catch (error) {
    // handle errors
    res.status(400).json(error);
  }
};

export const getSingleTicket = async (req, res) => {
  try {
    // api call
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json({ data: ticket });
  } catch (error) {
    // handle errors
    res.status(400).json(error);
  }
};

// create ticket
export const createTicket = async (req, res) => {
  try {
    // api call
    const createdTicket = new Ticket(req.body);
    const savedTicket = await createdTicket.save();
    res.status(201).json({ data: savedTicket });
  } catch (error) {
    // handle errors
    res.status(400).json(error);
  }
};

// update ticket
export const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ data: ticket });
  } catch (error) {
    res.status(400).json(error);
  }
};

// cancel ticket
export const cancelTicket = async (req, res) => {
  try {
    // api call
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ data: ticket });
  } catch (error) {
    // handle errors
  }
};

// delete ticket
export const deleteTicket = async (req, res) => {
  try {
    // api call
    await Ticket.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ data: "Ticket of ID " + req.params.id + " has been deleted" });
  } catch (error) {
    // handle errors
    res.status(400).json(error);
  }
};
