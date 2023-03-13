<script lang="ts">
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import MessageListItem from "../../molecules/list/MessageListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortStatus: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "성공" },
		{ id: 3, name: "실패" },
	];

	let searchQuery: string = "";
	let selectedStatus: object = sortStatus[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortStatus} selected={selectedStatus} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="25%">제목</GreyText>
		<GreyText width="35%">내용</GreyText>
		<GreyText width="20%">발송일시</GreyText>
		<GreyText width="20%">상태</GreyText>
	</ListItemLayout>
	<MessageListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />
