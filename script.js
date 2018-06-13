window.onload = () => {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const cntxt = canvas.getContext('2d');

  cntxt.fillStyle = 'rgb(255,0,0,0.5)';
  cntxt.fillRect(100, 100, 100, 100);
  cntxt.fillStyle = 'rgb(0,0,255,0.5)';
  cntxt.fillRect(200, 150, 100, 100);


  cntxt.beginPath();
  cntxt.moveTo(50, 300);
  cntxt.lineTo(300, 100);
  cntxt.lineTo(400, 300);
  cntxt.strokeStyle = '#666666';
  cntxt.stroke();


  for (let i = 0; i < 500; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    cntxt.beginPath();
    cntxt.arc(x, y, 30, 0, Math.PI * 2, false);
    cntxt.strokeStyle = 'blue';
    cntxt.stroke();
  }
};
