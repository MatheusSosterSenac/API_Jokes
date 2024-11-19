const express = require("express");

const PiadasApi = require("../api/piada");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware(), PiadasApi.getJokes);
router.get("/:id", authMiddleware(), PiadasApi.getJokeById);
router.post("/", authMiddleware(['admin']), PiadasApi.fetchAndSaveJoke);
router.put("/:id", authMiddleware(['admin']), PiadasApi.updateJoke);
router.delete("/:id", authMiddleware(['admin']), PiadasApi.deleteJoke);

module.exports = router;
