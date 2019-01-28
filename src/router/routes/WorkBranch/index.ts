import { OriginalRouteConfig } from "./../OriginalRouteConfig.interface";

const WorkBranchRoutes: OriginalRouteConfig = {
  path: "workBranch",
  name: "workBranch",
  isMain: true,
  meta: { desc: "工作台" },
  component: () => import("@/views/WorkBranch/index.vue"),
  children: [
    {
      path: "/workBranch/test",
      name: "workBranch-test",
      meta: { desc: "测试页面" },
      component: () => import("@/views/WorkBranch/Test/index.vue"),
    },
  ],
};

export { WorkBranchRoutes };
