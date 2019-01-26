import { OriginalRouteConfig } from "./../OriginalRouteConfig.interface";

const WorkBranchRoutes: OriginalRouteConfig = {
  path: "processCenter",
  name: "processCenter",
  meta: { desc: "处理中心" },
  component: () => import("@/views/ProcessCenter/index.vue"),
  children: [
    {
      path: "message",
      name: "processCenter-message",
      meta: { desc: "信息处理" },
      component: () => import("@/views/ProcessCenter/Message/index.vue"),
      children: [
        {
          path: "sign",
          name: "processCenter-message-sign",
          meta: { desc: "签到信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/Sign/index.vue"),
        },
        {
          path: "system",
          name: "processCenter-message-system",
          meta: { desc: "系统信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/System/index.vue"),
        },
        {
          path: "user",
          name: "processCenter-message-user",
          meta: { desc: "用户信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/User/index.vue"),
        },
      ],
    },
  ],
};

export { WorkBranchRoutes };
