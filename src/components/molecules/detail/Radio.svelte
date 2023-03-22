<script lang="ts">
	export let name: string;
	export let value: any;
	export let lists: any[];
	export let width: string = "150px";
	export let height: string = "50px";
	export let fontSize: string = "18px";
	export let gap: string = "10px";
</script>

<div style="gap:{gap}">
	{#each lists as element}
		<label style="width:{width};height:{height};font-size:{fontSize};">
			<input
				type="radio"
				{name}
				value={element.id}
				on:change={(e) => {
					value = e.target.value;
				}}
			/>
			{element.name}</label
		>
	{/each}
</div>

<style>
	div {
		display: flex;
	}
	label {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	input[type="radio"] {
		appearance: none;
		border: max(2px, 0.1em) solid gray;
		border-radius: 50%;
		width: 16px;
		height: 16px;
	}

	input[type="radio"]:checked {
		border: 0.4em solid grey;
	}

	input[type="radio"]:hover {
		box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
		cursor: pointer;
	}

	input[type="radio"]:disabled {
		background-color: lightgray;
		box-shadow: none;
		opacity: 0.7;
		cursor: not-allowed;
	}

	input[type="radio"]:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
