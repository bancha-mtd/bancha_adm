<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ItemDetailPanel from "../../organisms/item/ItemDetailPanel.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="상품관리" />
	<PageLayout>
		<ItemDetailPanel itemId={params.id} />
	</PageLayout>
</MainLayout>
