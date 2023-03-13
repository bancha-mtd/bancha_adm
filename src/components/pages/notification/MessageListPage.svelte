<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import MessageList from "../../organisms/message/MessageList.svelte";
</script>

<MainLayout>
	<PageHeader title="메시지" />
	<PageLayout>
		<MessageList />
	</PageLayout>
</MainLayout>
