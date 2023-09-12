import instance from "./Instance";

export default {
  getMoYeoBanchaList: async (obj: any) => {
    const response = await instance
      .post("/admin/product/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
