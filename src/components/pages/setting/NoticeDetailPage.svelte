<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import NoticeDetail from "../../organisms/notice/NoticeDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="공지사항" />
	<PageLayout>
		<NoticeDetail itemId={params.id} />
	</PageLayout>
</MainLayout>
