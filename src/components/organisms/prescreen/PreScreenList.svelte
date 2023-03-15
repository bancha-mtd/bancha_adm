<script lang="ts">
	import { onMount } from "svelte";
	import axios from "axios";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import PreScreenListItem from "../../molecules/list/PreScreenListItem.svelte";
	import PreScreenDetailPanel from "./PreScreenDetailPanel.svelte";

	onMount(async () => {
		const res = await axios
			.get("http://3.38.18.168/admin/pre-screen/edit-form")
			.then((res) => {
				list = res.data;
				// selected = list[0];
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
