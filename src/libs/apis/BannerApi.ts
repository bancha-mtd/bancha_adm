import instance from "./Instance";

export default {
  getBannerList: async (obj: any) => {
    const response = await instance
      .post("/admin/banner/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getBannerDetail: async (id: number, obj: any) => {
    const response = await instance.get(`/admin/banner/${id}`).catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
  addBanner: async (obj: any) => {
    const response = await instance
      .post("/admin/banner/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editBanner: async (obj: any) => {
    const response = await instance
      .post("/admin/banner/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
