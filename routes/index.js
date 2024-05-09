var express = require('express');
var router = express.Router(); // router is like a mini app inside the main app

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
