interface circle {
  x: number;
  y: number;
  r: number;
  _mx: number;
  _my: number;
  _color: string;
}
class Circle {
  public x: number;
  public y: number;
  public r: number;
  public _mx: number;
  public _my: number;
  public _color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.r = Math.random() * 5;
    this._mx = Math.random() > 0.5 ? Math.random() : -Math.random();
    this._my = Math.random() > 0.5 ? Math.random() : -Math.random();
    this._color = `rgba(255,255,255,${Math.random() * 5})`;
  }
  private drawCircle(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 360);
    ctx.closePath();
    ctx.fillStyle = this._color;
    ctx.fill();
  }

  private drawLine(ctx: CanvasRenderingContext2D, _circle: circle) {
    const dx = this.x - _circle.x;
    const dy = this.y - _circle.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 120) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(_circle.x, _circle.y);
      ctx.closePath();
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.stroke();
    }
  }
  private move(w: number, h: number) {
    this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
    this._my = this.y < h && this.y > 0 ? this._my : -this._my;
    this.x += this._mx;
    this.y += this._my;
  }
}

/**
 * 登录背景
 *
 * @param {number} num  // 初始化粒子数目
 * @param {number} ctxWidth // canvas宽度
 * @param {number} ctxHeight // canvas高度
 * @param {*} canvasElement // canvas元素
 */
function init(
  num: number,
  ctxWidth: number,
  ctxHeight: number,
  canvasElement: any,
) {
  window.requestAnimationFrame = window.requestAnimationFrame;
  const canvas = canvasElement;
  canvas.width = ctxWidth;
  canvas.height = ctxHeight;
  const ctx = canvas.getContext("2d");
  const circles: any[] = [];
  const draw = function() {
    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    for (let index = 0; index < circles.length; index++) {
      const element = circles[index];
      element.move(ctxWidth, ctxHeight);
      element.drawCircle(ctx);
      for (let j = index + 1; j < circles.length; j++) {
        element.drawLine(ctx, circles[j]);
      }
    }
    requestAnimationFrame(draw);
  };

  for (let i = 0; i < num; i++) {
    circles.push(
      new Circle(Math.random() * ctxWidth, Math.random() * ctxHeight),
    );
  }
  draw();
}

export { init };
