<script lang="ts">
	export let name: string;
	export let value: boolean[];
	export let lists: any;
	export let width: string = "150px";
	export let height: string = "50px";
	export let fontSize: string = "18px";
	export let gap: string = "10px";
</script>

<div style="gap:{gap}">
	{#each lists as element, i}
		<label style="width:{width};height:{height};font-size:{fontSize};">
			<input
				type="checkbox"
				{name}
				value={element}
				checked={value[i]}
				on:change={(e) => {
					value[i] = !value[i];
				}}
			/>
			{element}</label
		>
	{/each}
</div>

<style>
	div {
		display: flex;
	}
	label {
		display: flex;
		align-items: end;
		gap: 4px;
	}
	[type="checkbox"] {
		appearance: none;
		border: max(2px, 0.1em) solid gray;
		width: 16px;
		height: 16px;
	}

	[type="checkbox"]:checked {
		border: 0.4em solid grey;
	}

	[type="checkbox"]:hover {
		box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
		cursor: pointer;
	}

	[type="checkbox"]:disabled {
		background-color: lightgray;
		box-shadow: none;
		opacity: 0.7;
		cursor: not-allowed;
	}

	[type="checkbox"]:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
