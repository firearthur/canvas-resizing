const createCircles = (count, context, Circle) => {
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
    cntxt.fill();
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
module.exports = { Circle, createCircles };
