<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ExhibitionList from "../../organisms/exhibition/ExhibitionList.svelte";
</script>

<MainLayout>
	<PageHeader title="기획전" />
	<PageLayout>
		<ExhibitionList />
	</PageLayout>
</MainLayout>
