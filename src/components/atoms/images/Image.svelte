<script lang="ts">
	export let src: string;
	export let width: string = "30px";
	export let height: string = "30px";
	export let objectFit: string = "cover";
</script>

<img
	{src}
	style="width:{width};height:{height};object-fit:{objectFit}"
	alt="none"
/>
