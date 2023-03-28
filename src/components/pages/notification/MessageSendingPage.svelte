<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import MessageSending from "../../organisms/message/MessageSending.svelte";

	console.log(1);
</script>

<MainLayout>
	<PageHeader title="메시지" />
	<PageLayout>
		<MessageSending />
	</PageLayout>
</MainLayout>
