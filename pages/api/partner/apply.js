export default function handler(req, res) {
  const partner = req.body;
  console.log(partner);
  res.status(200).json({ name: "John Doe" });
}
