<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import CategoryAddPanel from "../../organisms/category/CategoryAddPanel.svelte";
	import CategoryList from "../../organisms/category/CategoryList.svelte";
	import RandomItemPanel from "../../organisms/category/RandomItemPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="카테고리" />
	<PageLayout>
		<CategoryAddPanel />
		<CategoryList />
		<RandomItemPanel />
	</PageLayout>
</MainLayout>
