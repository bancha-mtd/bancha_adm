<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import MemberDetail from "../../organisms/member/MemberDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="일반회원" />
	<PageLayout>
		<MemberDetail itemId={params.id} />
	</PageLayout>
</MainLayout>
