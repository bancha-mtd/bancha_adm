<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";

	export let itemId: string;

	let item = {
		id: -1,
		title: "",
		active: {},
		priority: "0",
		startDate: "",
		endDate: "",
		link: "",
		bannerImg: "",
	};

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
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	{#if item.id !== -1}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={item.id !== -1 ? modifyItem : addItem}
		>{#if item.id !== -1}수정{:else}등록{/if}</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout height="calc(100vh - 190px)">
	<DetailRow head={true} title="코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput fontSize="16px" width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="노출">
		<Radio
			name="active"
			bind:value={item.active}
			height="30px"
			width="80px"
			fontSize="16px"
			lists={[
				{ id: 1, name: "예" },
				{ id: 0, name: "아니오" },
			]}
		/>
	</DetailRow>
	<DetailRow title="노출순위">
		<BorderedInput type="number" fontSize="16px" bind:value={item.priority} />
	</DetailRow>
	<DetailRow title="시작일자">
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			bind:value={item.startDate}
		/>
	</DetailRow>
	<DetailRow title="종료일자">
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			bind:value={item.endDate}
		/>
	</DetailRow>
	<DetailRow title="링크">
		<BorderedInput fontSize="16px" width="40%" bind:value={item.link} />
		<LightGreyText width="210px" fontSize="12px"
			>앱 내 이동은 형식에 맞게 작성해주세요</LightGreyText
		>
	</DetailRow>
	<DetailRow title="이미지">
		<BorderedInput
			fontSize="16px"
			width="500px"
			type="file"
			bind:value={item.bannerImg}
		/>
	</DetailRow>
</DetailPanelLayout>
