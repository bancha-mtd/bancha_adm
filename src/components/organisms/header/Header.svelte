<script lang="ts">
	import { push } from "svelte-spa-router";
	import WhiteText from "../../atoms/texts/WhiteText.svelte";
	import HeaderLogo from "../../molecules/header/HeaderLogo.svelte";
	import {
		nickname,
		isLoggedIn,
		accessToken,
		email,
		managerId,
		refreshToken,
	} from "../../stores/UserInfoStore";

	const logout = () => {
		isLoggedIn.set(false);
		nickname.set("");
		email.set("");
		managerId.set(-1);
		accessToken.set("");
		refreshToken.set("");
		push("/");
	};
</script>

<header>
	<HeaderLogo />
	<button on:click={logout}>
		<WhiteText fontSize="20px">{$nickname}</WhiteText>
	</button>
</header>

<style>
	header {
		height: 50px;
		background-color: #aaaaaa;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 20px;
	}
</style>
