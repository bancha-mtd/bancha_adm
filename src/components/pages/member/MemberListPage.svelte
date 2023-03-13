<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import MemberList from "../../organisms/member/MemberList.svelte";
	import MemberListPanel from "../../organisms/member/MemberListPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="일반회원" />
	<PageLayout>
		<MemberListPanel />
		<MemberList />
	</PageLayout>
</MainLayout>
