<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PreScreenList from "../../organisms/prescreen/PreScreenList.svelte";
</script>

<MainLayout>
	<PageHeader title="프리스크린" />
	<PageLayout>
		<PreScreenList />
	</PageLayout>
</MainLayout>
