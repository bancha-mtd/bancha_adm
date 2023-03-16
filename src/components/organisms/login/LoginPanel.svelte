<script lang="ts">
	import { push } from "svelte-spa-router";
	import { onMount } from "svelte";

	import GreyButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import GreyInput from "../../atoms/inputs/GreyInput.svelte";
	import LoginLogo from "../../molecules/login/LoginLogo.svelte";
	import APIs from "../../utils/APIs";

	import {
		isLoggedIn,
		email,
		nickname,
		type,
	} from "../../stores/UserInfoStore";

	onMount(() => {
		if (isLoggedIn) {
			push("/main");
		}
	});

	let userId: string;
	let password: string;

	const login = () => {
		const res = APIs.login(userId, password);
		push("/main");
	};
</script>

<main>
	<LoginLogo />
	<form
		on:submit={(e) => {
			e.preventDefault();
		}}
	>
		<div>
			<GreyInput name="email" bind:value={userId} placeholder={"이메일"} />
			<GreyInput
				name="password"
				type={"password"}
				bind:value={password}
				placeholder={"비밀번호"}
			/>
		</div>
		<GreyButton type={"submit"} onClick={login} width="400px">로그인</GreyButton
		>
	</form>
</main>

<style>
	main {
		position: absolute;
		z-index: 1000;
		background-color: white;
		width: 100vw;
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;

		padding-top: 20vh;
		margin-top: -50px;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	form {
		gap: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
