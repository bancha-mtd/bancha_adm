<script lang="ts">
	import { push } from "svelte-spa-router";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import EventListItem from "../../molecules/list/EventListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";
	import { onMount } from "svelte";
	import Loading from "../../molecules/loading/Loading.svelte";

	let sortStatus: SelectType[] = [
		{ id: 1, name: "전체", value: -1 },
		{ id: 2, name: "진행 중", value: true },
		{ id: 3, name: "완료", value: false },
	];

	let searchQuery: string = "";
	let selectedStatus: SelectType = sortStatus[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;
	let list = [];
	let loading = true;

	onMount(() => {
		getEvents(1);
	});

	const getEvents = (page: number) => {
		loading = true;

		let option = { pageSize: 10, pageNum: 1 };
		option["pageNum"] = page;

		APIs.getEvent(option).then((res) => {
			if (res.status === 200) {
				list = res.data.content;
				maxPage = res.data.totalPages;
				loading = false;
				console.log(res)
			} else {
				alert("불러오기 에러!");
			}
		});
		curPage = page;
	};
	const search = () => {
		getEvents(1);
		curPage = 1;
		rangeMin = 1;
	};

	let addEvent: () => void = () => {
		push("/event/new");
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} value={searchQuery} />
		<TransparentSelect lists={sortStatus} selected={selectedStatus} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addEvent}
		width="110px"
		height="30px"
		fontSize="16px">+ 이벤트 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="15%">코드</GreyText>
		<GreyText width="40%">이벤트명</GreyText>
		<GreyText width="15%">시작일자</GreyText>
		<GreyText width="15%">종료일자</GreyText>
		<GreyText width="15%">조회수</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<EventListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />
