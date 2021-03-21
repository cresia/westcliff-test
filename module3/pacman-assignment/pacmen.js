const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = '10px';
  newimg.style.right = '10px';


  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let imageWidth = item.newimg.width;
  let imageHeight = item.newimg.height;
  let x = item.position.x;
  let y = item.position.y;
  let xVel = item.velocity.x;
  let yVel = item.velocity.y;

  //top
  if((y - imageHeight) <= 0) {
    item.velocity.y = -yVel;
    item.position.y = imageHeight;
  }

  //bottom
  if((y + yVel + imageHeight) >= canvasHeight) {
    item.velocity.y = -yVel;
    item.position.y = canvasHeight - imageHeight;
  }

  //left
  if((x-imageWidth) <= 0) {
    item.velocity.x = -xVel;
    item.position.x = imageWidth;
  }

  //right
  if((x + xVel + imageWidth) >= canvasWidth) {
    item.velocity.x = -xVel;
    item.position.x = canvasWidth - imageWidth;
  }
  

  
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
