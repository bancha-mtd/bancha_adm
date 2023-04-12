import axios from "axios";
import {
	grantType,
	accessToken,
	refreshToken,
	isLoggedIn,
	type,
	nickname,
	managerId,
} from "../stores/UserInfoStore";

const parseJwt = (token) => {
	let base64Url = token.split(".")[1];
	let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	let jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
};

const REFRESH_URL = "http://3.38.18.168/refresh";

const instance = axios.create({
	baseURL: "http://3.38.18.168",
	timeout: 3000,
});

let refreshed = false;
instance.interceptors.request.use(
	function (config) {
		return config;
	},
	async function (error) {
		const { response: errorResponse } = error;
		const conf = error.config;

		if (conf.url !== REFRESH_URL && errorResponse.status === 403) {
			let rToken = localStorage.getItem("refreshToken");
			console.log(rToken);
			if (rToken) {
				await instance
					.post("/refresh", { refreshToken: rToken })
					.then((res) => {
						console.log(res);
						refreshed = true;
						accessToken.set(res.data.accessToken);
						instance.defaults.headers.common[
							"Authorization"
						] = `Bearer ${res.data.accessToken}`;
						axios(conf);
					})
					.catch((err) => {
						console.log(err);
						console.log(rToken);
					});
			}
		}

		return Promise.reject(error);
	}
);

const Requests = {
	login: async (email, password) => {
		const response = await instance
			.post("/admin/manager/login", {
				userId: email,
				password: password,
			})
			.then((res) => {
				if (res.data.message === "토큰 생성 성공") {
					let tokenInfo = parseJwt(res.data.accessToken);

					isLoggedIn.set(true);
					grantType.set(res.data.grantType);
					accessToken.set(res.data.accessToken);
					refreshToken.set(res.data.refreshToken);
					type.set(tokenInfo.authType);
					nickname.set(tokenInfo.managerName);
					managerId.set(tokenInfo.id);

					localStorage.setItem("refreshToken", res.data.refreshToken);

					instance.defaults.headers.common[
						"Authorization"
					] = `${res.data.grantType} ${res.data.accessToken}`;
				}
				return res;
			})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	refresh: async (token) => {
		const response = await instance
			.post("/refresh", { refreshToken: token })
			.then((res) => {
				if (res.status === 200) {
					let tokenInfo = parseJwt(res.data.accessToken);

					isLoggedIn.set(true);
					grantType.set("Bearer");
					accessToken.set(res.data.accessToken);
					refreshToken.set(token);
					type.set(tokenInfo.authType);
					nickname.set(tokenInfo.managerName);
					managerId.set(tokenInfo.id);
					instance.defaults.headers.common[
						"Authorization"
					] = `${res.data.grantType} ${res.data.accessToken}`;
				}
				return res;
			})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getMainDashBoard: async () => {
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
	getItemStatistic: async () => {
		const response = await instance
			.get("/admin/product/statistics")
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getItem: async (obj) => {
		const response = await instance
			.post("/admin/product/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getExhibition: async (obj) => {
		const response = await instance
			.post("/admin/product/plan/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getCategory: async (obj) => {
		const response = await instance
			.post("/admin/category/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	addCategory: async (obj) => {
		const response = await instance
			.post("/admin/category/add", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	editCategory: async (obj) => {
		const response = await instance
			.post("/admin/category/edit", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	editCategoryImg: async (obj, id) => {
		const response = await instance
			.post(`/admin/category/edit-thumbnail/${id}`, obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getSection: async (obj) => {
		const response = await instance
			.post("/admin/section/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getSectionDetail: async (id) => {
		const response = await instance.get(`/admin/section/${id}`).catch((e) => {
			console.log(e);
			return e.response;
		});
		return response;
	},
	addSection: async (obj) => {
		const response = await instance
			.post("/admin/section/add", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	editSection: async (obj) => {
		const response = await instance
			.post("/admin/section/edit", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getMemberStatistic: async () => {
		const response = await instance
			.get("/admin/member/statistics")
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getMember: async (obj) => {
		const response = await instance
			.post("/admin/member/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getPartnerStatistic: async () => {
		const response = await instance
			.get("/admin/partner/statistics")
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getPartner: async (obj) => {
		const response = await instance
			.post("/admin/partner/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getPreScreen: async () => {
		const response = await instance.get("/admin/pre-screen/list").catch((e) => {
			console.log(e);
			return e.response;
		});
		return response;
	},
	addPreScreen: async (form) => {
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
	deletePreScreen: async (id) => {
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
	getBanner: async (obj) => {
		const response = await instance
			.post("/admin/banner/list", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
};

export default Requests;
