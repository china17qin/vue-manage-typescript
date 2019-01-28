const Limits: LimitItem[] = [
  {
    name: "processCenter",
    meta: {
      desc: "处理中心",
    },
    children: [
      {
        icon: "el-icon-message",
        name: "processCenter-message",
        meta: {
          desc: "信息中心",
        },
        children: [
          {
            name: "processCenter-message-sign",
            meta: {
              desc: "签名信息",
            },
          },
          {
            name: "processCenter-message-user",
            meta: {
              desc: "用户信息",
            },
          },
          {
            name: "processCenter-message-system",
            meta: {
              desc: "系统信息",
            },
          },
        ],
      },
      {
        icon: "el-icon-phone-outline",
        name: "processCenter-money",
        meta: {
          desc: "财务处理",
        },
      },
    ],
  },
  {
    name: "workBranch",
    meta: {
      desc: "工作台",
    },
    children: [
      {
        icon: "el-icon-location",
        name: "workBranch-test",
        meta: {
          desc: "测试页面",
        },
      },
    ],
  },
];

interface LimitItem {
  name: string;
  path?: string;
  icon?: string;
  redirect?: string;
  meta?: {
    desc?: string;
  };
  children?: LimitItem[];
}
export { Limits, LimitItem };
