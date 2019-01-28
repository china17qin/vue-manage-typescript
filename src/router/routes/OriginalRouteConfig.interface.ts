import { RouteConfig } from "vue-router";

/**
 * 标记access为true说明用户具有该路由的访问权限，等待添加动态路由
 *
 * @interface OriginalRouteConfig
 * @extends {RouteConfig}
 */
interface OriginalRouteConfig extends RouteConfig {
  access?: boolean;
  isMain?: boolean;
}

export { OriginalRouteConfig };
