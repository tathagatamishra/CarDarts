const express = require("express");
const router = express.Router();

const { create, read } = require("../controller/carCtrl");

// Debug API
router.get("/debug", (_, res) => {
  let data = "😍";
  return res.send({ data: data });
});

// ToDo APIs ---
router.post("/create", create);
router.get("/read", read);

module.exports = router;
