<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import FaqDetail from "../../organisms/notice/FAQDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="FAQ" />
	<PageLayout>
		<FaqDetail itemId={params.id} />
	</PageLayout>
</MainLayout>
