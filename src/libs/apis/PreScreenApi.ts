import instance from "./Instance";

export default {
  getPreScreenList: async () => {
    const response = await instance.get("/admin/pre-screen/list").catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
  addPreScreen: async (form: FormData) => {
    const response = await instance
      .post("/admin/pre-screen/add", form)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        return e.response;
      });
    return response;
  },
  deletePreScreen: async (id: number) => {
    const response = await instance
      .delete(`/admin/pre-screen/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        return e.response;
      });
    return response;
  },
};
