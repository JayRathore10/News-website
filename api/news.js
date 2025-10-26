import axios from "axios";

export default async function handler(req, res) {
  // eslint-disable-next-line no-undef
  const apiKey = process.env.NEWS_API_KEY; // secure API key
  const query = req.query.q || "news";

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
