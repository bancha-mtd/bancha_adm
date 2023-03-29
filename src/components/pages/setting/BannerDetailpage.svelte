<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import BannerDetail from "../../organisms/banner/BannerDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="배너" />
	<PageLayout>
		<BannerDetail itemId={params.id} />
	</PageLayout>
</MainLayout>
