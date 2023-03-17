import { writable, type Writable } from "svelte/store";

export let email:Writable<string> = writable("이메일");
export let nickname:Writable<string> = writable("닉네임");
export let managerId: Writable<number> = writable(-1);
export let type:Writable<string> = writable("-1");
export let grantType:Writable<String> = writable("");
export let accessToken:Writable<string> = writable("");
export let refreshToken:Writable<string> = writable("");
export let isLoggedIn:Writable<boolean> = writable(false);