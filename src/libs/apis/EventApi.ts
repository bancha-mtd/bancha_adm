import instance from "./Instance";

export default {
  getEventList: async (obj: any) => {
    const response = await instance
      .post("/admin/event/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addEvent: async (obj: any) => {
    const response = await instance.post("/admin/event/add", obj).catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
  editEvent: async (id: number, obj: any) => {
    const response = await instance
      .post(`/admin/event/edit/${id}`, obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getEventDetail: async (id: number, obj: any) => {
    const response = await instance.get(`/admin/event/${id}`).catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
};
