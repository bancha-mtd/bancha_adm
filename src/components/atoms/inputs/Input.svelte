<script lang="ts">
	export let value: string;
	export let width: string;
	export let height: string = "50px";
	export let placeholder = "검색어를 입력하세요";
</script>

<input bind:value style="width:{width};height:{height}" {placeholder} />

<style>
	input {
		font-size: 18px;
		padding: 10px;
		border-radius: 10px;
	}
</style>
