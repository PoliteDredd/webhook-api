import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  const { data } = req.body;

  if (typeof data !== "string" || data.trim() === "") {
    return res.status(400).json({
      error: "'data' must be a non-empty string",
    });
  }

  const sortedArray = data
    .split("")
    .sort((a, b) => a.localeCompare(b));

  return res.status(200).json({
    word: sortedArray,
  });
});

app.get("/", (req, res) => {
  res.send("Webhook API is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});