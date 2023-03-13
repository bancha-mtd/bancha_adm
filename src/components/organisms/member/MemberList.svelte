<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import MemberListItem from "../../molecules/list/MemberListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import TwoValueGreyText from "../../molecules/list/TwoValueGreyText.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortStandards: object[] = [
		{ id: 1, name: "가입일순" },
		{ id: 2, name: "후기순" },
		{ id: 3, name: "구매수순" },
		{ id: 4, name: "구매금액순" },
	];
	let sortOrder: object[] = [
		{ id: 1, name: "내림차순" },
		{ id: 2, name: "오름차순" },
	];
	let sortGrade: object[] = [
		{ id: 1, name: "등급 전체" },
		{ id: 2, name: "VIP" },
		{ id: 3, name: "반차 절친" },
		{ id: 4, name: "반차 친구" },
	];
	let searchQuery: string = "";
	let selectedStandard: object = sortStandards[0];
	let selectedOrder: object = sortOrder[0];
	let selectedGrade: object = sortGrade[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let addMember = () => {};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortStandards} selected={selectedStandard} />
		<TransparentSelect lists={sortOrder} selected={selectedOrder} />
		<TransparentSelect lists={sortGrade} selected={selectedGrade} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addMember}
		width="100px"
		height="30px"
		fontSize="16px">+ 회원 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="10%">회원번호</GreyText>
		<TwoValueGreyText width="20%" val1="이메일" val2="닉네임" />
		<GreyText width="10%">등급</GreyText>
		<GreyText width="10%">연락처</GreyText>
		<GreyText width="10%">후기</GreyText>
		<GreyText width="10%">구매</GreyText>
		<GreyText width="10%">구매금액</GreyText>
		<GreyText width="10%">상태</GreyText>
		<TwoValueGreyText width="10%" val1="최종접속일" val2="가입일" />
	</ListItemLayout>
	<MemberListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />
