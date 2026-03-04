const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Parsing JSON
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
    endpoints: {
      webhook: "POST /webhook - Send data to sort alphabetically"
    }
  });
});

// POST endpoint
app.post("/webhook", (req, res) => {
  const { data } = req.body;

  // Validating
  if (!data || typeof data !== "string") {
    return res.status(400).json({
      error: "Invalid input. 'data' must be a string."
    });
  }

  // Converting string to array of characters
  const charArray = data.split("");

  // Sorting alphabetically
  const sortedArray = charArray.sort((a, b) =>
    a.localeCompare(b)
  );

  // Returning sorted array as word
  return res.status(200).json({
    word: sortedArray
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});