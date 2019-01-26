import GenerateRouter from "@/untils/generateRouter";
import { ProcessCenterRoutes } from "@/router/routes/ProcessCenter";
import { WorkBranchRoutes } from "@/router/routes/WorkBranch";
import { Limits, LimitItem } from "@/mock/m_router";
import VueRouter from "vue-router";
const routesMap = [ProcessCenterRoutes, WorkBranchRoutes];

export default function(limits: LimitItem[], router: VueRouter) {
  const generRouter = new GenerateRouter(
    Limits,
    routesMap,
    router,
  );
  generRouter.init();
}
