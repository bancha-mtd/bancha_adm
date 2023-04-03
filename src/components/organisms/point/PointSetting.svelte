<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";

	let item = {
		expireDate: "0",
	};

	export let modify: () => void = () => {};
</script>

<SearchLayout>
	<BoldText fontSize="18px">전역 포인트 설정</BoldText>

	<GreyBackgroundButton
		onClick={modify}
		width="60px"
		height="30px"
		fontSize="16px">수정</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout padding={true}>
	<DetailRow title="유효 기간" head={true}>
		<LabeledBorderedInput
			type="number"
			pre=""
			post="일"
			bind:value={item.expireDate}
		/>
	</DetailRow>
</DetailPanelLayout>
