<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import InvalidKeywordPanel from "../../organisms/keyword/InvalidKeywordPanel.svelte";
	import RecommendKeywordPanel from "../../organisms/keyword/RecommendKeywordPanel.svelte";
	import SearchPlaceholderPanel from "../../organisms/keyword/SearchPlaceholderPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="키워드" />
	<PageLayout>
		<SearchPlaceholderPanel />
		<RecommendKeywordPanel />
		<InvalidKeywordPanel />
	</PageLayout>
</MainLayout>
