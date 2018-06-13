window.onload = () => {
  const createCircles = (count, context) => {
    const circles = [];

    for (let i = 0; i <= count; i++) {
      const radius = 30;
      const x = Math.random() * (innerWidth - radius * 2) + radius;
      const y = Math.random() * (innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5);
      const dy = (Math.random() - 0.5);

      circles.push(new Circle(x, y, dx, dy, radius, context));
    }

    return circles;
  };


  class Circle {
    constructor(x, y, dx, dy, radius, cntxt) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.cntxt = cntxt;
    }

    draw() {
      const {
        cntxt, x, y, radius,
      } = this;
      cntxt.beginPath();
      cntxt.arc(x, y, radius, 0, Math.PI * 2, false);
      cntxt.strokeStyle = 'blue';
      cntxt.stroke();
    }

    update(innerWidth, innerHeight) {
      const {
        x, y, radius,
      } = this;

      if (x + radius > innerWidth || x - radius < 0) {
        this.dx = -this.dx;
      }

      if (y + radius > innerHeight || y - radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
    }
  }


  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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

  const circles = createCircles(100, cntxt);

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

