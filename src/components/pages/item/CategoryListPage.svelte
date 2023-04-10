<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import CategoryControlPanel from "../../organisms/category/CategoryControlPanel.svelte";
	import RandomItemPanel from "../../organisms/category/RandomItemPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="카테고리" />
	<PageLayout>
		<CategoryControlPanel />
		<RandomItemPanel />
	</PageLayout>
</MainLayout>
