<template>
  <div :style="{width:collapse?'auto':'200px',backgroundColor:PbackroundColor,height:'100%'}">
    <el-menu
      :default-active="defaultActive"
      :background-color="PbackroundColor"
      :text-color="textColor"
      :collapse="collapse"
      :active-text-color="activeTextColor"
      router
    >
      <MenuItemNode :list="list"/>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { LimitItem } from '@/mock/m_router';
import MenuItemNode from "@/components/NavItemNode.vue";
@Component({
  components: { MenuItemNode },
})
export default class SideNavComponent extends Vue {
  @Prop() private PbackroundColor!: string;
  @Prop() private textColor!: string;
  @Prop() private defaultActive!: string;
  @Prop() private collapse!: boolean;
  @Prop() private activeTextColor!: string;
  @Prop() private list!: LimitItem[];

  onSelect(item: any) {
    console.log('路由');
    
   this.$router.push(item)
  }
}
</script>

<style lang="less" scoped>
* {
  user-select: none;
}
.el-menu {
  border-right: none !important;
}
</style>
