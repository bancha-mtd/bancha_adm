import instance from "./Instance";

export default {
  getSectionList: async (obj: any) => {
    const response = await instance
      .post("/admin/section/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getSectionDetail: async (id: string) => {
    const response = await instance.get(`/admin/section/${id}`).catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
  addSection: async (obj: any) => {
    const response = await instance
      .post("/admin/section/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editSection: async (obj: any) => {
    const response = await instance
      .post("/admin/section/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
