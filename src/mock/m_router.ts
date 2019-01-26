const Limits: LimitItem[] = [
  {
    name: "processCenter",
    children: [
      {
        name: "processCenter-message",
        children: [
          {
            name: "processCenter-message-sign",
          },
          {
            name: "processCenter-message-user",
          },
          {
            name: "processCenter-message-system",
          },
        ],
      },
      {
        name: "processCenter-money",
      },
    ],
  },
  {
    name: "workBranch",
    children: [
      {
        name: "workBranch-test",
      },
    ],
  },
];

interface LimitItem {
  name: string;
  children?: LimitItem[];
}
export { Limits, LimitItem };
