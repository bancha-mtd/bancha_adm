<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";
	import HeaderLogo from "../../molecules/header/HeaderLogo.svelte";
	import { nickname } from "../../stores/UserInfoStore";
</script>

<header>
	<HeaderLogo />
	<WhiteText text={$nickname} fontSize="20px" />
</header>

<style>
	header {
		width: calc(100vw - 20px);
		height: 50px;
		background-color: #aaaaaa;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 20px;
	}
</style>
