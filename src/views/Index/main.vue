<template>
  <el-container style="width:100vw;height:100vh">
    <el-header class="header-container">
      <HeaderComponent
        :PbackroundColor="TopNavBackroundColor"
        :activeTextColor="TopNavActiveTextColor"
        :textColor="TopNavTextColor"
        :list="TopNavList"
        :defaultActive="TopNavDefaultActive"
      />
    </el-header>
    <el-container>
      <el-aside class="aside-container" width="auto">
        <SideNavComponent
          :PbackroundColor="SideNavBackroundColor"
          :activeTextColor="SideNavActiveTextColor"
          :textColor="SideNavTextColor"
          :collapse="false"
          :defaultActive="SideNavDefaultActive"
          :list="SideNavList"
        />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import { TOP_NAV_BACKGROUND_COLOR, TOP_NAV_TEXT_COLOR, TOP_NAV_ACTIVE_TEXT_COLOR, LEFT_NAV_BACKGROUND_COLOR, LEFT_NAV_TEXT_COLOR, LEFT_NAV_ACTIVE_TEXT_COLOR } from "@/config/index";
import HeaderComponent from '@/components/Header.vue';
import SideNavComponent from '@/components/SideNav.vue';
import { LimitItem } from '@/mock/m_router';
@Component({
  components: {
    HeaderComponent,
    SideNavComponent,
  },
})
export default class MainContainer extends Vue {
  @Provide() private TopNavBackroundColor: string = TOP_NAV_BACKGROUND_COLOR || '#1E2024';
  @Provide() private TopNavActiveTextColor: string = TOP_NAV_ACTIVE_TEXT_COLOR || '#ffd04b';
  @Provide() private TopNavTextColor: string = TOP_NAV_TEXT_COLOR || '#fff';
  @Provide() private TopNavDefaultActive: string = 'TopNav';
  @Provide() private SideNavBackroundColor: string = LEFT_NAV_BACKGROUND_COLOR || '#232425';
  @Provide() private SideNavActiveTextColor: string = LEFT_NAV_ACTIVE_TEXT_COLOR || '#ffd04b';
  @Provide() private SideNavTextColor: string = LEFT_NAV_TEXT_COLOR || '#fff';
  @Provide() private SideNavDefaultActive: string = 'sideNav';
  @Provide() private TopNavList: LimitItem[] = [];
  @Provide() private SideNavList: LimitItem[] | undefined = [];
  @Provide() private routes: LimitItem[] = [];
  created() {
    const limitsString = sessionStorage.getItem('zks-limits');
    this.routes = limitsString !== null ? JSON.parse(limitsString) : [];
    this.setDefaultActiveRouter(this.routes)
  }
  @Watch('$route')
  routeChange() {
    this.setDefaultActiveRouter(this.routes)
  }

  setDefaultActiveRouter(topNavList: LimitItem[]) {
    const currentName = this.$route.matched[1].name;
    this.TopNavList = topNavList;
    topNavList.forEach(element => {
      if (element.name === currentName) {
        this.SideNavList = element.children;
      }
    })
    const currentRouter = (this.$router as any).history.current.matched;
    this.TopNavDefaultActive = currentRouter[1].path;
    this.SideNavDefaultActive = currentRouter[currentRouter.length - 1].path;
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0;
}
</style>


