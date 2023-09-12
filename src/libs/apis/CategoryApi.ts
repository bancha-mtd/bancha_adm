import instance from "./Instance";

export default {
  getCategoryList: async (obj: any) => {
    const response = await instance
      .post("/admin/category/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addCategory: async (obj: any) => {
    const response = await instance
      .post("/admin/category/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editCategory: async (obj: any) => {
    const response = await instance
      .post("/admin/category/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editCategoryImg: async (id: number, obj: any) => {
    const response = await instance
      .post(`/admin/category/edit-thumbnail/${id}`, obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
