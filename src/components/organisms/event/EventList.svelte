<script lang="ts">
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

	let sortStatus: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "진행 중" },
		{ id: 3, name: "완료" },
	];

	let searchQuery: string = "";
	let selectedStatus: object = sortStatus[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let addEvent: () => void;
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
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
	<EventListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />
