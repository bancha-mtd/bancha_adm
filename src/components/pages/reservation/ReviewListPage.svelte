<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ReviewList from "../../organisms/review/ReviewList.svelte";
</script>

<MainLayout>
	<PageHeader title="후기" />
	<PageLayout>
		<ReviewList />
	</PageLayout>
</MainLayout>
