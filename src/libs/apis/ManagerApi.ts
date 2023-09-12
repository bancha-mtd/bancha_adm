import instance from "./Instance";

export default {
  getManagerList: async (obj: any) => {
    const response = await instance
      .post("/admin/manager/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addManager: async (obj: any) => {
    const response = await instance
      .post("/admin/manager/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editManager: async (id: number, type: number, dep: string) => {
    const response = await instance
      .post(`/admin/manager/edit/${id}?authorityType=${type}&department=${dep}`)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  deleteManager: async (id: number) => {
    const response = await instance
      .delete(`/admin/manager/delete/${id}`)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
