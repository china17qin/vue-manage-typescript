<template>
  <el-container style="width:100vw;height:100vh">
    <el-header class="header-container">
      <HeaderComponent
        :PbackroundColor="TopNavBackroundColor"
        :activeTextColor="TopNavActiveTextColor"
        :textColor="TopNavTextColor"
      />
    </el-header>
    <el-container>
      <el-aside class="aside-container" width="auto">
        <SideNavComponent
          :PbackroundColor="SideNavBackroundColor"
          :activeTextColor="SideNavActiveTextColor"
          :textColor="SideNavTextColor"
          :collapse="false"
          :defaultActive="defaultActive"
        />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { TOP_NAV_BACKGROUND_COLOR, TOP_NAV_TEXT_COLOR, TOP_NAV_ACTIVE_TEXT_COLOR, LEFT_NAV_BACKGROUND_COLOR, LEFT_NAV_TEXT_COLOR, LEFT_NAV_ACTIVE_TEXT_COLOR } from "@/config/index";
import HeaderComponent from '@/components/Header.vue';
import SideNavComponent from '@/components/SideNav.vue';
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
  @Provide() private SideNavBackroundColor: string = LEFT_NAV_BACKGROUND_COLOR || '#232425';
  @Provide() private SideNavActiveTextColor: string = LEFT_NAV_ACTIVE_TEXT_COLOR || '#ffd04b';
  @Provide() private SideNavTextColor: string = LEFT_NAV_TEXT_COLOR || '#fff';
  @Provide() private defaultActive: string = '1-1';
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0;
}
</style>


