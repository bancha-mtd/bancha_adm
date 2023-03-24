<script lang="ts">
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";
</script>

<TitledPanelLayout
	title="신규 회원가입"
	to="/"
	width="100%"
	height="calc((100%-20px)/2)"
>
	<div>
		<TitledNumber title="일반" value={0} />
		<TitledNumber title="파트너" value={0} />
	</div>
</TitledPanelLayout>

<style>
	div {
		display: flex;
		justify-content: space-around;
	}
</style>
