<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import FaqList from "../../organisms/notice/FAQList.svelte";
	import NoticeList from "../../organisms/notice/NoticeList.svelte";
</script>

<MainLayout>
	<PageHeader title="공지사항 / FAQ" />
	<PageLayout>
		<NoticeList />
		<FaqList />
	</PageLayout>
</MainLayout>
