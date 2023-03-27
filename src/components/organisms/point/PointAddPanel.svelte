<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";

	let item = {
		userNickname: "",
		reason: "",
		point: "0",
	};

	export let addPoint: () => void = () => {};
</script>

<SearchLayout>
	<BoldText fontSize="18px">개별 포인트 지급</BoldText>

	<GreyBackgroundButton
		onClick={addPoint}
		width="60px"
		height="30px"
		fontSize="16px">지급</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout>
	<DetailRow title="닉네임">
		<BorderedInput type="email" bind:value={item.userNickname} />
	</DetailRow>
	<DetailRow title="지급 사유">
		<BorderedInput bind:value={item.reason} width="300px" />
	</DetailRow>
	<DetailRow title="포인트">
		<LabeledBorderedInput
			type="number"
			pre=""
			post="P"
			bind:value={item.point}
		/>
	</DetailRow>
</DetailPanelLayout>
