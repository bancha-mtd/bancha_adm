<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import MessageDetail from "../../organisms/message/MessageDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="메시지" />
	<PageLayout>
		<MessageDetail itemId={params.id} />
	</PageLayout>
</MainLayout>
