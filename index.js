// This file exists to satisfy Vercel's entrypoint requirement
// Actual API routes are in the /api directory
export default function handler(req, res) {
  res.status(200).json({
    message: "Webhook API",
    endpoints: {
      root: "GET / - This message",
      webhook: "POST /api/webhook - Sort string data alphabetically"
    }
  });
}
