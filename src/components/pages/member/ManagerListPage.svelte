<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ManagerList from "../../organisms/manager/ManagerList.svelte";
</script>

<MainLayout>
	<PageHeader title="관리자" />
	<PageLayout>
		<ManagerList />
	</PageLayout>
</MainLayout>
