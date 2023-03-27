<script lang="ts">
</script>

<article>
	<slot />
</article>

<style>
	article {
		padding: 20px;
		height: calc(100vh - 140px);
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-y: scroll;
	}
	article::-webkit-scrollbar {
		display: none;
	}
</style>
