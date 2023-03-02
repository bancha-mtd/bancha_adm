<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";
</script>

<div>
	<img src="src\assets\logo.png" alt={"Logo"} height={"50px"} />
	<WhiteText text="관리자 페이지" fontSize="16px" />
</div>

<style>
	div {
		height: 50px;
		display: flex;
		gap: 4px;
	}
	img {
		margin-right: -10px;
	}
</style>
