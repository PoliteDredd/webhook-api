export default function handler(req, res) {
  return res.status(200).json({
    message: "Server is running",
    endpoints: {
      webhook: "POST /api/webhook - Send data to sort alphabetically"
    }
  });
}