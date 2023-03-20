<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import YellowBackgroundButton from "../../atoms/buttons/YellowBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import CheckBox from "../../molecules/detail/CheckBox.svelte";

	export let itemId: string;

	const deleteItem = () => {
		return;
	};
	const addItem = () => {
		console.log(item);
		return;
	};
	const modifyItem = () => {
		console.log(item);
		return;
	};
	const preview = () => {
		return;
	};

	let managers: string[];
	let partners: string[];
	let categories: object[] = [{ id: -1, name: "" }];
	let item = {
		id: -1,
		manager: "",
		partner: "",
		category1: categories[0],
		category2: categories[0],
		category3: categories[0],
		title: "",
		subtitle: "",
		hashtags: "",
		peopleStandard: "",
		peopleMin: "",
		peopleMax: "",
		ageStandard: "",
		ageMin: "",
		ageMax: "",
		estimatedTime: "",
		autoConfirm: "",
		activeDay: [false, false, false, false, false, false, false],
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	{#if item.manager !== ""}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={item.manager !== "" ? modifyItem : addItem}
		>{#if item.manager !== ""}수정{:else}등록{/if}</GreyBackgroundButton
	>
	<YellowBackgroundButton
		onClick={preview}
		width="80px"
		height="30px"
		fontSize="16px">미리보기</YellowBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout>
	<DetailRow head={true} title="상품코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			alignCenter={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="담당자">
		<BorderedInput
			list="manager"
			bind:value={item.manager}
			alignCenter={true}
		/>
		<!-- <datalist id="manager">
			<option value="이나" /><option value="아리" /><option
				value="메이"
			/><option value="딘" /></datalist
		> -->
	</DetailRow>
	<DetailRow title="파트너">
		<BorderedInput
			list="partner"
			bind:value={item.partner}
			alignCenter={true}
		/>
		<!-- <datalist id="manager">
			<option value="이나" /><option value="아리" /><option
				value="메이"
			/><option value="딘" /></datalist
		> -->
	</DetailRow>
	<DetailRow title="카테고리">
		<SpaceAround gap="30px">
			<Select
				lists={categories}
				selected={item.category1}
				fontSize="16px"
				height="30px"
			/>
			<Select
				lists={categories}
				selected={item.category2}
				fontSize="16px"
				height="30px"
			/>
			<Select
				lists={categories}
				selected={item.category3}
				fontSize="16px"
				height="30px"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="상품명">
		<BorderedInput width="80%" bind:value={item.title} placeholder="" />
	</DetailRow>
	<DetailRow title="부제목">
		<BorderedInput width="80%" bind:value={item.subtitle} placeholder="" />
	</DetailRow>
	<DetailRow title="해시태그">
		<BorderedInput width="80%" bind:value={item.hashtags} placeholder="" />
	</DetailRow>
	<DetailRow title="인원">
		<SpaceAround gap="30px">
			<LabeledBorderedInput
				bind:value={item.peopleStandard}
				pre="기준"
				post=""
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.peopleMin}
				pre="최소"
				post="인"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.peopleMax}
				pre="최대"
				post="인"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="적정연령">
		<SpaceAround gap="30px">
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageStandard}
				pre=""
				post="세"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageMin}
				pre="(최소"
				post="세"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageMax}
				pre="최대"
				post="세)"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="상품명">
		<LabeledBorderedInput pre="" post="시간" bind:value={item.estimatedTime} />
	</DetailRow>
	<DetailRow title="자동확정여부">
		<Radio
			name="autoConfirm"
			bind:value={item.autoConfirm}
			height="30px"
			fontSize="16px"
			lists={["예약 확정 대기", "예약 자동 확정"]}
		/>
	</DetailRow>
	<DetailRow title="요일">
		<CheckBox
			name="activeDay"
			bind:value={item.activeDay}
			width="70px"
			height="auto"
			fontSize="16px"
			lists={["월", "화", "수", "목", "금", "토", "일"]}
		/>
	</DetailRow>
</DetailPanelLayout>

<div>{itemId}</div>

<style>
</style>
