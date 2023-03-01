<script lang="ts">
	import GreyButton from "../../atoms/buttons/GreyButton.svelte";
	import GreyInput from "../../atoms/inputs/GreyInput.svelte";
	import LoginLogo from "../../molecules/login/LoginLogo.svelte";

	let email: string;
	let password: string;

	const login = () => {
		console.log(email, password);
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
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 20vh;
	}
	div {
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 20px;
	}
</style>
