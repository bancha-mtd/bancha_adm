import instance from "./Instance";

export default {
  getProductStatistics: async () => {
    const response = await instance
      .get("/admin/product/statistics")
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getProductForm: async () => {
    const response = await instance
      .get("/admin/product/add-product-form")
      .catch((e) => {
        return e.response;
      });
    return response;
  },
  getProductList: async (obj: any) => {
    const response = await instance
      .post("/admin/product/list", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  getProductDetail: async (id: string) => {
    const response = await instance.get(`/admin/product/${id}`).catch((e) => {
      console.log(e);
      return e.response;
    });
    return response;
  },
  getProductOption: async (id: string, date: string) => {
    const response = await instance
      .post(`/admin/product/option/stock`, { date: date, productId: id })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  addProduct: async (obj: any) => {
    const response = await instance
      .post("/admin/product/add/v2", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  modifyProduct: async (obj: any) => {
    const response = await instance
      .post("/admin/product/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editProduct: async (obj: any) => {
    const response = await instance
      .post("/admin/product/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
  editIndividualOption: async (obj: any) => {
    const response = await instance
      .post("/admin/product/option/stock/edit", obj)
      .catch((e) => {
        console.log(e);
        return e.response;
      });
    return response;
  },
};
