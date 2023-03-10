<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ItemList from "../../organisms/item/ItemList.svelte";
	import ItemListPanel from "../../organisms/item/ItemListPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="상품관리" />
	<PageLayout>
		<ItemListPanel />
		<ItemList />
	</PageLayout>
</MainLayout>
