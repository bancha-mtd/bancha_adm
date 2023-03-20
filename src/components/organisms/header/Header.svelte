<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";
	import HeaderLogo from "../../molecules/header/HeaderLogo.svelte";
	import { nickname } from "../../stores/UserInfoStore";
</script>

<header>
	<HeaderLogo />
	<WhiteText fontSize="20px">{$nickname}</WhiteText>
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
