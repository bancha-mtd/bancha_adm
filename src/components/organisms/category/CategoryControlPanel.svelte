<script lang="ts">
	import CategoryAddPanel from "./CategoryAddPanel.svelte";
	import CategoryList from "./CategoryList.svelte";

	let needUpdate = false;
</script>

<CategoryAddPanel bind:needUpdate />
<CategoryList bind:needUpdate />
