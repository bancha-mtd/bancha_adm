<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import SectionList from "../../organisms/section/SectionList.svelte";
</script>

<MainLayout>
	<PageHeader title="섹션" />
	<PageLayout>
		<SectionList />
	</PageLayout>
</MainLayout>
