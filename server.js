const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// POST endpoint
app.post("/webhook", (req, res) => {
  const { data } = req.body;

  // Validation
  if (!data || typeof data !== "string") {
    return res.status(400).json({
      error: "Invalid input. 'data' must be a string."
    });
  }

  // Convert string to array of characters
  const charArray = data.split("");

  // Sort alphabetically
  const sortedArray = charArray.sort((a, b) =>
    a.localeCompare(b)
  );

  // Return sorted array as word
  return res.status(200).json({
    word: sortedArray
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});