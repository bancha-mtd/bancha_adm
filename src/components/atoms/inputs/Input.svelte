<script lang="ts">
	export let value: string;
	export let width: string;
</script>

<input bind:value style="width:{width}" placeholder="검색어를 입력하세요" />

<style>
	input {
		height: 50px;
		font-size: 18px;
		padding: 10px;
		border-radius: 10px;
	}
</style>
