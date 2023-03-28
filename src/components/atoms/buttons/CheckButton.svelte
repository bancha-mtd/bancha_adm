<script lang="ts">
	export let onClick: () => void;
	export let selected: boolean = false;
</script>

{#if selected}
	<button class="check selected" on:click={onClick} />
{:else}
	<button class="check nonselected" on:click={onClick} />
{/if}

<style>
	.check {
		width: 16px;
		height: 16px;
	}
	.selected {
		background-color: #aaa;
	}
	.nonselected {
		border: 1px solid #aaa;
	}
</style>
