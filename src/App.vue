<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import generateRouterFun from "@/router/generateRouter.ts"
@Component
export default class App extends Vue {

  created() {
    let limitString = sessionStorage.getItem('zks-limits');
    let limit: any[] = [];
    if (limitString) {
      limit = JSON.parse(limitString)
    } else {
      limit = []
    }
    setTimeout(() => {
      generateRouterFun(limit, this.$router)
    }, 0);
  }
}
</script>


<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar{
  width: 0;
  height: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
