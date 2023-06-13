<script lang="ts">
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import PartnerListItem from "../../molecules/list/PartnerListItem.svelte";
	import TwoValueGreyText from "../../molecules/list/TwoValueGreyText.svelte";
	import Loading from "../../molecules/loading/Loading.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";

	let searchStandards: SelectType[] = [
		{ id: 1, name: "아이디", value: 1 },
		{ id: 2, name: "닉네임", value: 2 },
		{ id: 3, name: "대표자명", value: 3 },
		{ id: 4, name: "연락처", value: 4 },
	];
	let sortStandards: SelectType[] = [
		{ id: 1, name: "가입일순", value: "new" },
		{ id: 2, name: "후기순", value: "review" },
		{ id: 3, name: "판매량순", value: "saleCnt" },
	];
	let sortOrder: SelectType[] = [
		{ id: 1, name: "내림차순", value: "desc" },
		{ id: 2, name: "오름차순", value: "asc" },
	];
	let sortGrade: SelectType[] = [
		{ id: 1, name: "등급 전체", value: -1 },
		{ id: 2, name: "우수", value: 1 },
		{ id: 3, name: "보통", value: 2 },
		{ id: 4, name: "관리 요망", value: 3 },
	];
	let searchQuery: string = "";
	let selectedSearchStandard: SelectType = searchStandards[0];
	let selectedStandard: SelectType = sortStandards[0];
	let selectedOrder: SelectType = sortOrder[0];
	let selectedGrade: SelectType = sortGrade[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getPartners(1);
	});

	const getPartners = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			if (selectedSearchStandard.value === 1) {
				option["userId"] = searchQuery;
			} else if (selectedSearchStandard.value === 2) {
				option["nickName"] = searchQuery;
			} else if (selectedSearchStandard.value === 3) {
				option["ceoName"] = searchQuery;
			} else if (selectedSearchStandard.value === 4) {
				option["phoneNumber"] = searchQuery;
			}
		}
		option["sortType"] = selectedStandard.value;
		option["sortDirection"] = selectedOrder.value;
		if (selectedGrade.value !== -1) {
			option["grade"] = selectedGrade.value;
		}

		APIs.getPartner(option).then((res) => {
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
	let addPartner = () => {
		
		push("/partner/new");
	};

	const search = () => {
		getPartners(1);
		curPage = 1;
		rangeMin = 1;
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end"
		><Select
			lists={searchStandards}
			bind:selected={selectedSearchStandard}
			borderRadius={true}
		/>
		<Search onEnter={search} value={searchQuery} />
		<TransparentSelect lists={sortStandards} bind:selected={selectedStandard} />
		<TransparentSelect lists={sortOrder} bind:selected={selectedOrder} />
		<TransparentSelect lists={sortGrade} bind:selected={selectedGrade} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addPartner}
		width="120px"
		height="30px"
		fontSize="16px">+ 파트너 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="10%">파트너번호</GreyText>
		<TwoValueGreyText width="20%" val1="계정" val2="닉네임" />
		<GreyText width="10%">등급</GreyText>
		<GreyText width="10%">대표자</GreyText>
		<GreyText width="10%">연락처</GreyText>
		<GreyText width="10%">후기</GreyText>
		<GreyText width="10%">판매</GreyText>
		<GreyText width="10%">상품</GreyText>
		<GreyText width="10%">상태</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<PartnerListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getPartners} />
