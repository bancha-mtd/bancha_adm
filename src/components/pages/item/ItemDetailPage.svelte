<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="상품관리" />
	<PageLayout>
		<div>수정예정</div>
		<div>{params.id}</div>
	</PageLayout>
</MainLayout>
