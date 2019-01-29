<template>
  <div id="sign-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
@Component
export default class SignPage extends Vue {
  @Prop() private canvasWidth!: number;
  @Prop() private canvasHeight!: number;
  created() {
    this.$nextTick().then(f => {
      const container: HTMLElement | null = document.getElementById('sign-container');
      const canvas: HTMLCanvasElement | null = this.$refs.canvas as HTMLCanvasElement;
      setTimeout(() => {
        if (container !== null && canvas !== null) {
          this.init(container, canvas)
        }
      }, 0);
    })
  }
  init(container: HTMLElement, canvas: HTMLCanvasElement) {

    if (container !== null && canvas !== null) {
      const width: number = container.clientWidth;
      const height: number = container.clientHeight;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      let particleArr: any[] = [];
      for (let index = 0; index < 2000; index++) {
        particleArr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          color: `rgba(${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())},${Math.random() * 3})`,
          dx: Math.random() > 0.5 ? Math.random() : -Math.random(),
          dy: Math.random() > 0.5 ? Math.random() : -Math.random(),
        })
      }
      const draw = () => {
        if (ctx !== null) {
          ctx.clearRect(0, 0, width, height)
          for (let index = 0; index < particleArr.length; index++) {
            const element = particleArr[index];
            this.move(element, width, height)
            ctx.fillStyle = element.color;
            ctx.fillRect(element.x, element.y, 2, 2)
          }
        }
        requestAnimationFrame(draw);
      }
      draw()
    }
  }
  move(element: any, width: number, height: number) {
    element.dx = element.x < width && element.x > 0 ? element.dx : -element.dx;
    element.dy = element.y < height && element.y > 0 ? element.dy : -element.dy;
    element.x += element.dx
    element.y += element.dy;
  }
}
</script>


<style lang="less" scoped>
#sign-container {
  background: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: crosshair;
}
</style>

