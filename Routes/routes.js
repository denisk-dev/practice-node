const express = require('express');

const router = express.Router();


router.get("/", (req, res, next) =>{
  res.send("<h1>Dennis Kravchenko");
});


router.get("/about", (req, res, next) => {
  res.send("<h1>This is about page</h1>");

});


module.exports = router;