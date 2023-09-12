import instance from "./Instance";

export default {
  getReservationList: async (obj: any) => {
    const response = await instance
      .post("/admin/reservation/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getReservationDetail: async (id: string) => {
    const response = await instance
      .get(`/admin/reservation/${id}`)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
