const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    // console.log(req.query);
    const title = req.query.title || "";
    const skip = req.query.skip || 0;
    const limit = req.query.limit || 100;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    // console.log(req.params);
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  try {
    console.log(req.params);
    const comicId = req.params.comicId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
