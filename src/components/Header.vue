<template>
  <div :style="{backgroundColor:PbackroundColor}">
    <el-row>
      <el-col :span="3">
        <div class="logo">Logo</div>
      </el-col>
      <el-col :span="21">
        <el-row type="flex" align="center">
          <el-col :span="22">
            <el-menu
              :default-active="defaultActive"
              mode="horizontal"
              :background-color="PbackroundColor"
              :active-text-color="activeTextColor"
              :text-color="textColor"
              router
            >
              <el-menu-item
                v-for="item in list"
                :key="item.name"
                :index="'/'+item.path"
              >{{item.meta.desc}}</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="2" style="display:flex">
            <el-button @click="loginOut" style="color:#fff" size="medium" type="text">退出登录</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { LimitItem } from '@/mock/m_router';
@Component
export default class HeaderComponent extends Vue {
  @Prop() private PbackroundColor!: string;
  @Prop() private activeTextColor!: string;
  @Prop() private textColor!: string;
  @Prop() private list!: LimitItem[];
  @Prop() private defaultActive!: string;

  loginOut() {
    sessionStorage.removeItem('zks-limits')
    sessionStorage.removeItem('zks-user-token');
    this.$router.push('/login');
  }
}
</script>
<style lang="less" scoped>
* {
  user-select: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
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
