<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DesignedDetailLayout from "../../layouts/DesignedDetailLayout.svelte";
	import GreyBgTitledRow from "../../molecules/detail/GreyBgTitledRow.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import Flex from "../../atoms/layouts/Flex.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";

	export let idx: number = -1;

	export let item = {
		id: -1,
		birth: "",
		sex: true,
		interest: "",
	};

	const modifyItem = () => {
		console.log(item);
		return;
	};
</script>

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">자녀 {idx}</BoldText>
	<GreyBackgroundButton
		onClick={modifyItem}
		width="60px"
		height="30px"
		fontSize="16px">수정</GreyBackgroundButton
	>
</SpaceBetween>
<DesignedDetailLayout>
	<Flex>
		<GreyBgTitledRow title="생년월일" width="50%">
			<Text fontSize="16px">{item.birth}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="성별" width="50%">
			<Text fontSize="16px">{item.sex ? "남" : "여"}</Text>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="관심사" width="50%">
			<Text fontSize="16px">{item.interest}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="MBTI" width="50%">
			<Text fontSize="16px">{item.mbti}</Text>
		</GreyBgTitledRow>
	</Flex>
</DesignedDetailLayout>
