window.onload = function () {
  canv = document.getElementById('gc');
  ctx = canv.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000 / 15);
};
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
highScore = 5;
function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = 'lime';
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
      document.getElementById('currentScore').innerHTML =
        'Current Score: ' + tail + ' cubes long';
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    tail++;
    if (tail > highScore) {
      highScore++;
    }
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
    document.getElementById('currentScore').innerHTML =
      'Current Score: ' + tail + ' cubes long';
    document.getElementById('highScore').innerHTML =
      'High Score: ' + highScore + ' cubes long';
  }
  ctx.fillStyle = 'red';
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
  switch (evt.keyCode) {
    /* left arrow key and 'A' key */
    case 37:
      move('left');
      break;
    case 65:
      move('left');
      break;
    /* up arrow key and 'W' key */
    case 38:
      move('up');
      break;
    case 87:
      move('up');
      break;
    /* right arrow key and 'D' key */
    case 39:
      move('right');
      break;
    case 68:
      move('right');
      break;
    /* down arrow key and 'S' key */
    case 40:
      move('down');
      break;
    case 83:
      move('down');
      break;
  }
}
function move(direction) {
  if (direction == 'left') {
    xv = -1;
    yv = 0;
  } else if (direction == 'right') {
    xv = 1;
    yv = 0;
  } else if (direction == 'up') {
    xv = 0;
    yv = -1;
  } else if (direction == 'down') {
    xv = 0;
    yv = 1;
  }
}
