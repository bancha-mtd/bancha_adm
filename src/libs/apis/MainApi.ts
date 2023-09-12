import instance from "./Instance";

export default {
  getMainStatistics: async () => {
    const response = await instance
      .get("/admin/dash-board")
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
