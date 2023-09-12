import instance from "./Instance";

export default {
  getSearchPhrasesList: async (obj: any) => {
    const response = await instance
      .get("/admin/phrases/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addSearchPhrase: async (txt: string) => {
    let obj = { phrase: txt };
    const response = await instance
      .post("/admin/phrases/add", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  deleteSearchPhrase: async (id: number) => {
    const response = await instance
      .delete(`/admin/phrases/delete/${id}`)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
