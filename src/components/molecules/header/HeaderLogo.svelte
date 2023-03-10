<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";
	import { isLoggedIn } from "../../stores/UserInfoStore";
	import { selected } from "../../stores/MenuStore";
	import { push } from "svelte-spa-router";

	const navigate = () => {
		$selected = -1;
		push($isLoggedIn ? "/main" : "/");
	};
</script>

<button on:click={navigate}>
	<img src="\src\assets\logo.png" alt={"Logo"} height={"50px"} />
	<WhiteText fontSize="16px">관리자 페이지</WhiteText>
</button>

<style>
	button {
		height: 50px;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	img {
		margin-right: -10px;
	}
</style>
