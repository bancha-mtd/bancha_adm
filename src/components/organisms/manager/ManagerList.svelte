<script lang="ts">
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import ManagerListItem from "../../molecules/list/ManagerListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Loading from "../../molecules/loading/Loading.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import APIs from "../../utils/APIs";
	import { onMount } from "svelte";
	import ManagerAddPanel from "./ManagerAddPanel.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getManagers(1);
	});

	const getManagers = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			option["title"] = searchQuery;
		}

		APIs.getManager(option).then((res) => {
			if (res.status === 200) {
				list = res.data.content;
				maxPage = res.data.totalPages;
				loading = false;
			} else {
				alert("불러오기 에러!");
			}
		});
		curPage = page;
	};
	const search = () => {
		getManagers(1);
		curPage = 1;
		rangeMin = 1;
	};
</script>

<ManagerAddPanel
	reload={() => {
		getManagers(1);
	}}
/>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} value={searchQuery} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="12%">관리자번호</GreyText>
		<GreyText width="25%">이메일</GreyText>
		<GreyText width="12%">등급</GreyText>
		<GreyText width="12%">닉네임</GreyText>
		<GreyText width="15%">소속</GreyText>
		<GreyText width="12%">상태</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<ManagerListItem
				{item}
				reload={() => {
					getManagers(1);
				}}
			/>
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getManagers} />
