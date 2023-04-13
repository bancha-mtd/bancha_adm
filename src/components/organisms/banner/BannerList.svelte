<script lang="ts">
	import { onMount } from "svelte";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import BannerListItem from "../../molecules/list/BannerListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import type { SelectType } from "../../utils/Types";
	import Loading from "../../molecules/loading/Loading.svelte";
	import { push } from "svelte-spa-router";
	import APIs from "../../utils/APIs";

	let sortOrder: SelectType[] = [
		{ id: 1, name: "내림차순", value: "desc" },
		{ id: 2, name: "오름차순", value: "asc" },
	];

	let sortStatus: SelectType[] = [
		{ id: 1, name: "전체", value: "" },
		{ id: 2, name: "진행 중", value: true },
		{ id: 3, name: "기간 만료", value: false },
	];

	let searchQuery: string = "";
	let selectedOrder: SelectType = sortOrder[0];
	let selectedStatus: SelectType = sortStatus[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;
	let list = [];
	let loading = true;

	onMount(() => {
		getBanners(1);
	});

	const getBanners = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			option["title"] = searchQuery;
		}
		option["orderDirection"] = selectedStatus.value;
		if (selectedStatus.id > 1) {
			option["useYn"] = selectedStatus.value;
		}

		APIs.getBanner(option).then((res) => {
			if (res.status === 200) {
				console.log(res.data.content);
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
		getBanners(1);
		curPage = 1;
		rangeMin = 1;
	};

	let addBanner = () => {
		push("/banner/new");
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} value={searchQuery} />
		<TransparentSelect lists={sortOrder} selected={selectedOrder} />
		<TransparentSelect lists={sortStatus} selected={selectedStatus} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addBanner}
		width="100px"
		height="30px"
		fontSize="16px">+ 배너 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="12%">코드</GreyText>
		<GreyText width="40%">배너명</GreyText>
		<GreyText width="12%">노출순위</GreyText>
		<GreyText width="12%">시작일자</GreyText>
		<GreyText width="12%">종료일자</GreyText>
		<GreyText width="12%">클릭수</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<BannerListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getBanners} />
