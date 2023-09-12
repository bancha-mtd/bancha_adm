import axios, { Axios } from "axios";

const instance: Axios = axios.create({
  baseURL: "https://adminmtd.bancha.kr",
  timeout: 3000,
});

let refreshed = false;
const setAuth = async () => {
  if (instance.defaults.headers.common["Authorization"] === undefined) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;
  }
};

instance.interceptors.request.use(async function (config) {
  return await setAuth().then(() => {
    console.log(
      config.url,
      instance.defaults.headers.common["Authorization"] !== undefined
    );
    return config;
  });
});
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const { response: errorResponse } = error;
    const conf = error.config;
    console.log("에러 났당", conf);
    // console.log(errorResponse.status);

    if (conf.url !== "/refresh" && errorResponse.status === 403) {
      let rToken = localStorage.getItem("refreshToken");
      if (rToken) {
        console.log("토큰 다시 받아야징");
        return await instance
          .post("/refresh", { refreshToken: rToken })
          .then((res) => {
            if (res.status === 200) {
              console.log("토큰 다시 받았당", res);
              refreshed = true;
              localStorage.setItem("refreshToken", res.data["refreshToken"]);
              localStorage.setItem("accessToken", res.data["accessToken"]);
              instance.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${res.data.accessToken}`;
              conf.headers.Authorization = `Bearer ${res.data.accessToken}`;
              console.log("이전 요청 재실행");
              return axios(conf);
            }
          })
          .catch((err) => {
            console.log("리프레쉬 실패", err);
          });
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
