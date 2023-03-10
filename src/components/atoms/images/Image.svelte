<script lang="ts">
	export let src: string;
	export let width: string = "30px";
	export let height: string = "30px";
</script>

<img {src} style="width:{width};height:{height}" alt="none" />

<style>
	img {
		object-fit: cover;
	}
</style>
