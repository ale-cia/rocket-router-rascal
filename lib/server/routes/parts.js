var express = require("express");
var router = express.Router();
var spaceshipParts = require('../modules/spaceship-parts');

router.get('/', function(req, res){ // Removed parts/parts baby
  res.send(spaceshipParts);
});

router.post('/new', function(req, res){ //This was changed to post keep me posted if you solve this one
  spaceshipParts.push(req.body);
  res.sendStatus(200);
});

router.get('/rocketCount', function(req, res){ // count your rockets or rocket your count?
  var numberOfSpaceships = Math.floor(spaceshipParts[0].inStock/spaceshipParts[0].needed);
  for(var i = 1; i < spaceshipParts.length; i++){
    numberOfSpaceships = Math.min(numberOfSpaceships, Math.floor(spaceshipParts[i].inStock/spaceshipParts[i].needed));
  }

  var howMany = { count: numberOfSpaceships }
  console.log(howMany);
  res.send(howMany); //changed variable to howMany 
  // numberOfSpaceships is a number, how does express like that? howMany ways to say this...
});

module.exports = router;
