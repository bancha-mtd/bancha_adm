<script lang="ts">
	export let value: string;
	export let width: string;
</script>

<div style="width:{width}">
	<input bind:value placeholder="검색어를 입력하세요" />
</div>

<style>
	div {
		text-align: center;
	}
	input {
		border: 1px solid #ccc;
		width: 50%;
		height: 30px;
		font-size: 18px;
		text-align: center;
	}
</style>
