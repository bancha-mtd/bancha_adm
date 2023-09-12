import instance from "./Instance";

export default {
  getMemberStatistic: async () => {
    const response = await instance
      .get("/admin/member/statistics")
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getMemberList: async (obj: any) => {
    const response = await instance
      .post("/admin/member/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
