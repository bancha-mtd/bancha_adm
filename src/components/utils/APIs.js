import axios from "axios";
import {
	grantType,
	accessToken,
	refreshToken,
	isLoggedIn,
	type,
	nickname,
} from "../stores/UserInfoStore";

const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split(".")[1]));
	} catch (e) {
		return null;
	}
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
					console.log(res.status);
					isLoggedIn.set(true);
					grantType.set(res.data.grantType);
					accessToken.set(res.data.accessToken);
					refreshToken.set(res.data.refreshToken);

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
