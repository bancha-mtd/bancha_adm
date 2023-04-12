<script lang="ts">
	import { onMount } from "svelte";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import ExhibitionListItem from "../../molecules/list/ExhibitionListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";
	import { push } from "svelte-spa-router";
	import Loading from "../../molecules/loading/Loading.svelte";

	let sortIsActive: SelectType[] = [
		{ id: 1, name: "전체", value: "" },
		{ id: 2, name: "진행 중", value: "now" },
		{ id: 3, name: "예정", value: "future" },
	];
	let searchQuery: string = "";
	let selectedIsActive: SelectType = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getExhibitions(1);
	});

	const getExhibitions = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			option["title"] = searchQuery;
		}
		option["progressType"] = selectedIsActive.value;

		APIs.getExhibition(option).then((res) => {
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
		getExhibitions(1);
		curPage = 1;
		rangeMin = 1;
	};

	let addExhibition = () => {
		push("/exhibition/new");
	};
</script>

<SearchLayout />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} bind:value={searchQuery} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addExhibition}
		width="110px"
		height="30px"
		fontSize="16px">+ 기획전 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout gap="2%" head={true}>
		<GreyText width="6.8%">코드</GreyText>
		<GreyText width="30%">기획전명</GreyText>
		<GreyText width="6.8%">참여 공급자</GreyText>
		<GreyText width="6.8%">상품</GreyText>
		<GreyText width="10%">시작일자</GreyText>
		<GreyText width="10%">종료일자</GreyText>
		<GreyText width="6.8%">조회수</GreyText>
		<GreyText width="6.8%">판매량</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<ExhibitionListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getExhibitions} />
