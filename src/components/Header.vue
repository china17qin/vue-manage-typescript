<template>
  <div :style="{backgroundColor:PbackroundColor}">
    <el-row>
      <el-col :span="4">
        <div class="logo">Logo</div>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          :background-color="PbackroundColor"
          :active-text-color="activeTextColor"
          :text-color="textColor"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">我的工作台</el-menu-item>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  data() {
    return {
      activeIndex: '2-3',
    };
  },
})
export default class HeaderComponent extends Vue {
  @Prop() private PbackroundColor!: string;
  @Prop() private activeTextColor!: string;
  @Prop() private textColor!: string;
  private handleSelect(key: string, keyPath: string[]) {
    // console.log(key, keyPath);
  }
}
</script>
<style lang="less" scoped>
.logo {
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 32px;
  cursor: pointer;
  user-select: none;
}
</style>
