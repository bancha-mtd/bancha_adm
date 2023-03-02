<script lang="ts">
	import { push } from "svelte-spa-router";

	import GreyButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import GreyInput from "../../atoms/inputs/GreyInput.svelte";
	import LoginLogo from "../../molecules/login/LoginLogo.svelte";

	let email: string;
	let password: string;

	const login = () => {
		console.log(email, password);
		push("/main");
	};
</script>

<main>
	<LoginLogo />
	<div>
		<GreyInput bind:value={email} placeholder={"이메일"} />
		<GreyInput
			type={"password"}
			bind:value={password}
			placeholder={"비밀번호"}
		/>
	</div>
	<GreyButton onClick={login} width="400px" height="50px" text="로그인" />
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
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 20px;
	}
</style>
