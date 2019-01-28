import { OriginalRouteConfig } from "./../OriginalRouteConfig.interface";

const ProcessCenterRoutes: OriginalRouteConfig = {
  path: "processCenter",
  name: "processCenter",
  isMain: true,
  meta: { desc: "处理中心" },
  component: () => import("@/views/ProcessCenter/index.vue"),
  children: [
    {
      path: "/processCenter/message",
      name: "processCenter-message",
      meta: { desc: "信息处理" },
      component: () => import("@/views/ProcessCenter/Message/index.vue"),
      children: [
        {
          path: "/processCenter/message/sign",
          name: "processCenter-message-sign",
          meta: { desc: "签到信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/Sign/index.vue"),
        },
        {
          path: "/processCenter/message/system",
          name: "processCenter-message-system",
          meta: { desc: "系统信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/System/index.vue"),
        },
        {
          path: "/processCenter/message/user",
          name: "processCenter-message-user",
          meta: { desc: "用户信息" },
          component: () =>
            import("@/views/ProcessCenter/Message/User/index.vue"),
        },
      ],
    },
    {
      path: "/processCenter/money",
      name: "processCenter-money",
      meta: { desc: "财务处理" },
      component: () => import("@/views/ProcessCenter/Money/index.vue"),
    },
  ],
};

export { ProcessCenterRoutes };
