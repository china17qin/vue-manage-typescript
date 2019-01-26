import { OriginalRouteConfig } from "./../OriginalRouteConfig.interface";

const ProcessCenterRoutes: OriginalRouteConfig = {
  path: "workBranch",
  name: "workBranch",
  meta: { desc: "工作台" },
  component: () => import("@/views/WorkBranch/index.vue"),
  children: [
    {
      path: "test",
      name: "workBranch-test",
      meta: { desc: "测试页面" },
      component: () => import("@/views/WorkBranch/Test/index.vue"),
    },
  ],
};

export { ProcessCenterRoutes };
