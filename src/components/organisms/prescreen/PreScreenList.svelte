<script lang="ts">
	import { onMount } from "svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import PreScreenListItem from "../../molecules/list/PreScreenListItem.svelte";
	import PreScreenDetailPanel from "./PreScreenDetailPanel.svelte";
	import APIs from "../../utils/APIs";

	interface PreScreenObject {
		id: number;
		title: string;
		contents: string;
	}

	onMount(async () => {
		APIs.getPreScreen().then((res) => {
			list = res.data;
		});
	});

	let list: PreScreenObject[] = [];
	let selected: PreScreenObject = { id: -1, title: "", contents: "" };
	let file: Blob;
	let select = (obj: PreScreenObject) => {
		selected = obj;
	};

	let addPreScreen = () => {
		let form = new FormData();
		if (selected.title == "" || file === undefined) {
			alert("제목과 이미지를 모두 채워주세요!");
			return;
		}
		form.append("title", selected.title);
		form.append("preScreenImage", file, file.name);
		APIs.addPreScreen(form).then((res) => {
			selected.id = res[1].id;
			APIs.getPreScreen().then((res) => {
				list = res.data;
			});
		});
	};
	let deletePreScreen = () => {
		APIs.deletePreScreen(selected.id)
			.then(() => {
				reset();
				selected.id = -3;
			})
			.then(() => {
				APIs.getPreScreen().then((res) => {
					list = res.data;
				});
				reset();
			});
	};
	let reset = () => {
		selected = { id: -1, title: "", contents: "" };
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
	<PreScreenDetailPanel
		bind:selected
		{addPreScreen}
		{deletePreScreen}
		{reset}
		bind:file
	/>
</SpaceBetween>
