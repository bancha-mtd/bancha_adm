import instance from "./Instance";

export default {
  getExhibitionList: async (obj: any) => {
    const response = await instance
      .post("/admin/product/plan/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addExhibition: async (obj: any) => {
    const response = await instance
      .post("/admin/product/plan/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
