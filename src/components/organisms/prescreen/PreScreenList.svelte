<script lang="ts">
	import { onMount } from "svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import PreScreenListItem from "../../molecules/list/PreScreenListItem.svelte";
	import PreScreenDetailPanel from "./PreScreenDetailPanel.svelte";
	import APIs from "../../utils/APIs";

	onMount(async () => {
		const res = APIs.getPreScreen().then((res) => {
			console.log(res);
			list = res[1];
		});
	});
	let list: any[] = [];
	let selected: object = undefined;
	let select = (obj: object) => {
		selected = obj;
	};
</script>

<SpaceBetween alignItems="start">
	<ListLayout width="75%">
		<ListItemLayout head={true}>
			<GreyText width="20%">코드</GreyText>
			<GreyText width="80%">이름</GreyText>
		</ListItemLayout>
		{#each list as element}
			<PreScreenListItem onClick={select} item={element} />
		{/each}
	</ListLayout>
	<PreScreenDetailPanel {selected} />
</SpaceBetween>
