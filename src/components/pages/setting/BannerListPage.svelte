<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import BannerList from "../../organisms/banner/BannerList.svelte";
</script>

<MainLayout>
	<PageHeader title="배너" />
	<PageLayout>
		<BannerList />
	</PageLayout>
</MainLayout>
