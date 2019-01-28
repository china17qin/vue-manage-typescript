import { LimitItem } from "@/mock/m_router";
import { OriginalRouteConfig } from "@/router/routes/OriginalRouteConfig.interface";
import VueRouter, { RouteConfig } from "vue-router";
export default class GenerateRouter {
  private limits: LimitItem[];
  private wrapRedirect: string[] = [];
  private routes: OriginalRouteConfig[];
  private router: VueRouter;
  constructor(
    limits: LimitItem[],
    routes: OriginalRouteConfig[],
    router: VueRouter,
  ) {
    this.limits = limits;
    this.routes = routes;
    this.router = router;
  }
  public init() {
    console.time("start");
    this.matchRouter(this.routes);
    this.ClearNoAccessRoute(this.routes);
    setTimeout(() => {
      this.addrouter(this.router, this.routes);
    }, 0);
    // console.log(this.routes);
    console.timeEnd("start");
  }
  // 执行addrouters
  public addrouter(router: any, routes: RouteConfig[]) {
    routes.forEach((element, index) => {
      router.options.routes[0].children.push(element);
    });
    router.addRoutes(router.options.routes);
  }
  // 循环路由,调用markAccess标记用户权限
  private matchRouter(routes: OriginalRouteConfig[]) {
    routes.forEach((element) => {
      this.markAccess(this.limits, element);
      if (element.children && element.children.length > 0) {
        this.matchRouter(element.children);
      }
    });
  }

  // 循环权限列表，找出该用户是否具有该路由的权限。如果有则acctss标记为true。没有则不做操作
  private markAccess(list: LimitItem[], target: OriginalRouteConfig) {
    list.forEach((element) => {
      if (element.name === target.name) {
        element.path = target.path;
        target.access = true;
        this.getRedirect(target);
      }
      if (element.children && element.children.length > 0) {
        this.markAccess(element.children, target);
      }
    });
  }

  // 循环整个路由，清除掉没有权限的路由，禁止用户访问
  private ClearNoAccessRoute(routes: OriginalRouteConfig[]) {
    routes.forEach((element, index) => {
      if (!element.access) {
        routes.splice(index, 1);
      }
      if (element.children && element.children.length > 0) {
        this.ClearNoAccessRoute(element.children);
      }
    });
  }

  // 给每个主分类设置重定向到该分类下第一个有有权限的侧分类
  private getRedirect(target: OriginalRouteConfig) {
    const redirectArr: string[] = [];
    this.getPath(target, redirectArr);
  }

  // 获取以该路由为起点的所有子路由从定向
  private getPath(item: OriginalRouteConfig, redirectArr: string[]) {
    if (item.children && item.children.length > 0) {
      this.getPath(item.children[0], redirectArr);
    }
    redirectArr.push(item.path);
    if (item.isMain) {
      item.redirect = redirectArr.reverse()[redirectArr.length - 1];
    }
  }
}
