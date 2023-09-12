import instance from "./Instance";

export default {
  getPartnerStatistic: async () => {
    const response = await instance
      .get("/admin/partner/statistics")
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getPartnerList: async (obj: any) => {
    const response = await instance
      .post("/admin/partner/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addPartner: async (obj: any) => {
    const response = await instance
      .post("/admin/partner/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
