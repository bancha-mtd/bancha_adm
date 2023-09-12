import instance from "./Instance";

export default {
  parseJwt: (token: string) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  },

  login: async (email: string, pw: string) => {
    return await instance
      .post("/admin/manager/login", {
        userId: email,
        password: pw,
      })
      .then((res) => {
        if (res.status === 200) {
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data["accessToken"]}`;
          localStorage.setItem("refreshToken", res.data["refreshToken"]);
          localStorage.setItem("accessToken", res.data["accessToken"]);
        }
        return res;
      })
      .catch((e) => {
        console.log("login error", e.response);
        return e.response;
      });
  },
  refresh: async (token: string) => {
    const response = await instance
      .post("/refresh", { refreshToken: token })
      .then((res) => {
        if (res.status === 200) {
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data["accessToken"]}`;
          localStorage.setItem("refreshToken", res.data["refreshToken"]);
          localStorage.setItem("accessToken", res.data["accessToken"]);
        }
        return res;
      })
      .catch((e) => {
        console.log("refresh", e);
        return e.response;
      });
    return response;
  },
};
