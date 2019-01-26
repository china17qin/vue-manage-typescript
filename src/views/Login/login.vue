<template>
  <div id="login-container" class="login-container">
    <canvas ref="canvas"></canvas>
    <el-card class="form-container">
      <el-row>
        <h5>用户登录</h5>
      </el-row>
      <el-form ref="loginForm" size="meidum" :rules="rules" :model="form">
        <el-form-item prop="user">
          <el-input v-model="form.user" placeholder="请输入您的公司邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom:15px">
          <el-input v-model="form.password" type="password" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <div class="abs-wrapper">
          <router-link :to="{path: '/full/forget'}" class="reg-text" title="立即注册?">忘记密码</router-link>
          <router-link :to="{path: '/full/register'}" class="reg-text" title="立即注册">立即注册</router-link>
        </div>
        <el-form-item>
          <el-button :loading="loading" @click="login" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import { init } from "@/untils/drawBg";
import { post } from "@/untils/http";
import { ElForm } from 'element-ui/types/form';
import generateRouterFun from "@/router/generateRouter.ts"
import { Limits } from "@/mock/m_router";
import { RouterOptions } from 'vue-router';
interface FormType {
  user: string;
  password: string;
}
@Component
export default class extends Vue {
  @Provide() private Canvas!: any;
  @Provide() private CtxWidth!: number;
  @Provide() private CtxHeight!: number;
  @Provide() private loading: boolean = false;
  @Provide() private form: FormType = {
    user: '',
    password: ''
  };
  @Provide() private rules = {
    user: [
      { required: true, message: '请输入公司邮箱', trigger: 'change', },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'change', },
    ]
  };
  private created(): void {
    this.$nextTick().then(() => {
      const container = document.getElementById('login-container');
      this.Canvas = this.$refs.canvas;
      this.windowResize(container);
      window.onresize = () => {
        this.windowResize(container);
      };
    });

  }

  private login(): void {
    (this.$refs['loginForm'] as ElForm).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        post('/login', this.form).then(f => {
          this.loading = false;
          if (f.status) {
            const $_router: any = this.$router;
            generateRouterFun(Limits, $_router)
            sessionStorage.setItem('zks-limits', JSON.stringify(Limits))
            sessionStorage.setItem('zks-user-token', f.result.token)
            this.$router.replace('/processCenter/message/sign');
          }
        })
      } else {
        return false;
      }
    });
  }

  private windowResize(container: HTMLElement | null): void {
    this.CtxWidth = container ? container.clientWidth : 0;
    this.CtxHeight = container ? container.clientHeight : 0;
    init(200, this.CtxWidth, this.CtxHeight, this.Canvas);
  }
}
</script>

<style lang="less" scoped>
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.login-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;
  position: relative;
  .abs-wrapper {
    height: 35px;
    line-height: 20px;
    text-align: right;
    padding: 0 10px;
    .reg-text {
      color: #f8f8f8;
      letter-spacing: 1px;
      font-size: 11px;
      margin-left: 10px;
    }
  }
  h5 {
    user-select: none;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    margin: 15px 0 25px 0;
    letter-spacing: 2px;
    text-shadow: 0px -2px 0px rgba(255, 255, 255, 0.3);
  }
  .form-container {
    background-color: transparent;
    width: 430px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
    box-shadow: 0 0 25px #cac6c6;
    border: none;
    .el-input__inner {
      background-color: red !important;
    }
  }
}
</style>

