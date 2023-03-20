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
				if (res.status === 200) {
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
				return [e.response.status, e.response.data];
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
				return [e.response.status, e.response.data];
			});
	},
	getItemStatistic: async () => {
		const response = await instance
			.get("/admin/product/statistics")
			.catch((e) => {
				console.log(e);
				return [e.response.status, e.response.data];
			});
		return response;
	},
	getItem: async (obj) => {
		const response = await instance
			.post("/admin/product/management", obj)
			.catch((e) => {
				console.log(e);
				return [e.response.status, e.response.data];
			});
		return response;
	},
	getPreScreen: async () => {
		const response = await instance
			.get("/admin/pre-screen/edit-form")
			.catch((e) => {
				console.log(e);
				return [e.response.status, e.response.data];
			});
		return response;
	},
	addPreScreen: async (form) => {
		const response = await instance
			.post("/admin/pre-screen/add", form)
			.then((res) => {
				console.log(res);
				return [res.status, res.data];
			})
			.catch((e) => {
				return [e.response.status, e.response.data];
			});
		return response;
	},
	deletePreScreen: async (id) => {
		const response = await instance
			.delete(`/admin/pre-screen/${id}`)
			.then((res) => {
				console.log(res);
				return [res.status, res.data];
			})
			.catch((e) => {
				return [e.response.status, e.response.data];
			});
		return response;
	},
};

export default Requets;
