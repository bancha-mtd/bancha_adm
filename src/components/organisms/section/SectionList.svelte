<script lang="ts">
	import { onMount } from "svelte";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import SectionListItem from "../../molecules/list/SectionListItem.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";
	import { push } from "svelte-spa-router";
	import Loading from "../../molecules/loading/Loading.svelte";

	let sortIsActive: SelectType[] = [
		{ id: 1, name: "전체", value: -1 },
		{ id: 2, name: "진행 중", value: true },
		{ id: 3, name: "종료", value: false },
	];
	let searchQuery: string = "";
	let selectedIsActive: SelectType = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getSections(1);
	});

	const getSections = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			option["title"] = searchQuery;
		}
		if (selectedIsActive.value !== -1) {
			option["useYn"] = selectedIsActive.value;
		}

		APIs.getSection(option).then((res) => {
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
		getSections(1);
		curPage = 1;
		rangeMin = 1;
	};

	let addSection = () => {
		push("/section/new");
	};
</script>

<SearchLayout />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} value={searchQuery} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addSection}
		width="120px"
		height="30px"
		fontSize="16px">+ 섹션 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="20%">코드</GreyText>
		<GreyText width="25%">섹션명</GreyText>
		<GreyText width="20%">노출 순위</GreyText>
		<GreyText width="20%">상품수</GreyText>
		<GreyText width="15%">노출</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<SectionListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getSections} />
