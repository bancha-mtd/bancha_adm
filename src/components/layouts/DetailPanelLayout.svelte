<script lang="ts">
	export let width: string = "auto";
	export let height: string = "auto";
	export let padding: boolean = false;
</script>

<section
	style="padding:{padding
		? '20px 0 20px 0'
		: 'none'};width:{width};height:{height}"
>
	<slot />
</section>

<style>
	section {
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-bottom: 20px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-y: scroll;
	}
	section::-webkit-scrollbar {
		display: none;
	}
</style>
