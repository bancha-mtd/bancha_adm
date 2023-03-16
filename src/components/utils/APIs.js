import axios from "axios";
import {
	grantType,
	accessToken,
	refreshToken,
	isLoggedIn,
} from "../stores/UserInfoStore";

const instance = axios.create({
	baseURL: "http://3.38.18.168",
	timeout: 1000,
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
		return [response.status, response.data];
	},
	getAdminInfo: async () => {
		const response = await instance
			.post("/admin/login", {
				userId: email,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					grantType = response.data.grantType;
					accessToken = response.data.accessToken;
					refreshToken = response.data.refreshToken;

					instance.defaults.headers.common[
						"Authorization"
					] = `${grantType} ${accessToken}`;
					console.log(`${grantType} ${accessToken}`);
				}
			})
			.catch((e) => {
				return [e.response.status, e.response.data];
			});
		return [response.status, response.data];
	},
	getPreScreen: async () => {
		const response = await instance
			.get("/admin/pre-screen/edit-form")
			.catch((e) => {
				return [e.response.status, e.response.data];
			});
		return [response.status, response.data];
	},
	addPreScreen: async () => {
		const response = await instance.post("/admin/pre-screen/add").catch((e) => {
			return [e.response.status, e.response.data];
		});
		return [response.status, response.data];
	},
};

export default Requets;
