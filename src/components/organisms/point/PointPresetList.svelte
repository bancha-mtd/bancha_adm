<script lang="ts">
	import { push } from "svelte-spa-router";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import PointPresetListItem from "../../molecules/list/PointPresetListItem.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import PointSetting from "./PointSetting.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;
</script>

<PointSetting />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={() => {
			push("/preset/point/new");
		}}
		width="80px"
		height="30px"
		fontSize="16px">+ 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="20%">코드</GreyText>
		<GreyText width="25%">타입명</GreyText>
		<GreyText width="15%">혜택</GreyText>
		<GreyText width="15%">발급기간</GreyText>
		<GreyText width="15%">발급수</GreyText>
	</ListItemLayout>
	<PointPresetListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />
