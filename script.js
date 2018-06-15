window.onload = () => {
  const { Circle, createCircles } = require('./circle.js');
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth - 4;
  canvas.height = window.innerHeight - 4;

  const cntxt = canvas.getContext('2d');

  // rectangles
  // cntxt.fillStyle = 'rgb(255,0,0,0.5)';
  // cntxt.fillRect(100, 100, 100, 100);
  // cntxt.fillStyle = 'rgb(0,0,255,0.5)';
  // cntxt.fillRect(200, 150, 100, 100);

  // lines
  // cntxt.beginPath();
  // cntxt.moveTo(50, 300);
  // cntxt.lineTo(300, 100);
  // cntxt.lineTo(400, 300);
  // cntxt.strokeStyle = '#666666';
  // cntxt.stroke();

  const circles = createCircles(100, cntxt, Circle);

  const animate = () => {
    requestAnimationFrame(animate);
    // clears the previously drawn circle to make
    // circles look like they're moving instead of
    // creating circles next to each other
    cntxt.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle) => {
      circle.draw();
      circle.update(innerWidth, innerHeight);
    });
  };
  animate();
};

