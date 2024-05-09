var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) { // /users + /
  res.send('User List');
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", function (req, res) {
  res.send("Create User");
});

// dynamically create route + common functions (get, put, delete)
router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id}`)
})  

router.put("/:id", (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});  

router.delete("/:id", (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});  

module.exports = router;
