import Axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import router from "@/router/router";
import { Message, MessageBox } from "element-ui";
import { HTTP_BASE_URL, HTTP_TIME_OUT } from "@/config/index";

Axios.defaults.timeout = HTTP_TIME_OUT;
Axios.defaults.baseURL = HTTP_BASE_URL;

// request拦截器

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookies.get("zks-user-token");
    // config.data = JSON.parse(JSON.stringify(config.data));
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// response拦截器
Axios.interceptors.response.use((response: AxiosResponse<any>) => {
  if (
    response.data.errCode !== "000000" &&
    response.data.errCode !== "000001"
  ) {
    MessageBox.confirm("本次请求发生了错误，是否上传错误日志?", "发生错误", {
      confirmButtonText: "确定上传",
      cancelButtonText: "暂不上传",
      type: "error",
    })
      .then(() => {
        Message.success("上传日志成功");
      })
      .catch((f) => {
        Message.info("取消上传错误日志");
      });
  } else if (response.data.errCode === "000001") {
    router.push("/full/login");
  }
  return response;
});

/**
 * http post请求
 *
 * @export
 * @param {string} url
 * @param {object} data
 * @returns
 */
export function post(url: string, data: object) {
  return new Promise<Result>((resolve, reject) => {
    Axios.post(url, data).then(
      (f: AxiosResponse) => {
        if (f.data.errCode && f.data.errCode === "000000") {
          resolve({
            status: true,
            result: f.data.data,
          });
        } else {
          resolve({
            status: false,
            result: f.data.data,
          });
        }
      },
      (error: AxiosError) => {
        reject(error);
      },
    );
  });
}

interface Result {
  status: boolean;
  result: any;
}
