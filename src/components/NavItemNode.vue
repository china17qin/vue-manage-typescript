<template>
  <div>
    <template v-for="item in list">
      <el-submenu :key="item.name" :index="item.path" v-if="item.children">
        <template slot="title">
          <i :class="item.icon?item.icon:''"></i>
          <span slot="title">{{item.meta.desc}}</span>
        </template>
        <MenuItemNode :list="item.children"></MenuItemNode>
      </el-submenu>
      <el-menu-item :key="item.name" :index="item.path?item.path:'undefind'" v-else>
        <i :class="item.icon?item.icon:''"></i>
        <span slot="title">{{item.meta.desc}}</span>
      </el-menu-item>
    </template>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { LimitItem } from "@/mock/m_router";
//  @Component
@Component({
  name: 'MenuItemNode'
})
export default class MenuItemNode extends Vue {
  @Prop() private list!: LimitItem[];
}
</script>



