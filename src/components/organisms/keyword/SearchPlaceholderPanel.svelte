<script lang="ts">
	import { onMount } from "svelte";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import APIs from "../../utils/APIs";
	import SearchPhrasesListItem from "../../molecules/list/SearchPhrasesListItem.svelte";
	import Loading from "../../molecules/loading/Loading.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import Flex from "../../atoms/layouts/Flex.svelte";

	let text: string = "";
	let loading: boolean = false;
	let list = [];
	onMount(() => {
		getPhrases();
	});

	const getPhrases = () => {
		loading = true;
		APIs.getSearchPhrases().then((res) => {
			if (res.status === 200) {
				list = res.data;
				loading = false;
			}
		});
	};
	const add = () => {
		APIs.addSearchPhrase(text).then((res) => {
			getPhrases();
			text = "";
		});
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">검색창 문구</BoldText>
</SearchLayout>
<DetailPanelLayout padding={true} marginBottom={true}>
	<ul>
		{#if loading}
			<Loading />
		{:else}
			{#each list as item}
				<SearchPhrasesListItem reload={getPhrases} {item} />
			{/each}
		{/if}
	</ul>
	<DetailRow title="추가">
		<Flex gap="20px">
			<BorderedInput bind:value={text} width="300px" />
			<GreyBackgroundButton
				onClick={add}
				width="60px"
				height="30px"
				fontSize="16px">추가</GreyBackgroundButton
			></Flex
		>
	</DetailRow>
</DetailPanelLayout>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding-left: 20px;
		margin-bottom: 20px;
	}
</style>
