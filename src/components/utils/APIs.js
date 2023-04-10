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

const instance = axios.create({
	baseURL: "http://3.38.18.168",
	timeout: 3000,
});

const Requets = {
	login: async (email, password) => {
		const response = await instance
			.post("/admin/login", {
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
	refresh: async () => {
		const response = await instance
			.post("/refresh", { refreshToken: refreshToken })
			.then((res) => {
				if (res.status === 200) {
					accessToken.set(res.data.accessToken);
				}
			})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
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
			.post("/admin/partner/management", obj)
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	getPreScreen: async () => {
		const response = await instance
			.get("/admin/pre-screen/edit-form")
			.catch((e) => {
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
};

export default Requets;
