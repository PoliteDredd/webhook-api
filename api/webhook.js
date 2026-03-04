export default function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { data } = req.body;

  // Validate input
  if (typeof data !== "string" || data.trim() === "") {
    return res.status(400).json({
      error: "'data' must be a non-empty string",
    });
  }

  // Convert and sort
  const sortedArray = data
    .split("")
    .sort((a, b) => a.localeCompare(b));

  return res.status(200).json({
    word: sortedArray,
  });
}