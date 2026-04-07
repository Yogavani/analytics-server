const express = require("express");
const app = express();

app.use(express.json());

let events = []; // memory storage

// receive events
app.post("/events", (req, res) => {
  const incomingEvents = req.body.events;

  events.push(...incomingEvents);

  console.log("Received events:", incomingEvents);

  res.json({ success: true });
});

// view events
app.get("/events", (req, res) => {
  res.json(events);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});