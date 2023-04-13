<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import { onMount } from "svelte";
	import APIs from "../../utils/APIs";
	import ItemSearch from "../common/ItemSearch.svelte";
	import { push } from "svelte-spa-router";
	import type { SelectType } from "../../utils/Types";

	export let itemId: any;
	let loading = false;
	let item = {
		id: -1,
		title: "",
		priority: "",
		layout: "",
		useYn: true,
		backgroundColor: "",
		products: [],
	};
	let productIds: number[] = [];
	let useYns: SelectType[] = [
		{ id: 1, name: "예", value: true },
		{ id: 1, name: "아니요", value: false },
	];
	let useYn: SelectType = useYns[0];

	onMount(() => {
		if (itemId !== "new") {
			getSection();
		}
	});

	const getSection = () => {
		loading = true;

		APIs.getSectionDetail(itemId).then((res) => {
			if (res.status === 200) {
				item = res.data;
				for (let i = 0; i < item.products.length; i++) {
					productIds.push(item.products[i].id);
				}
				useYn = res.data.useYn ? useYns[0] : useYns[1];
				loading = false;
			} else {
				alert("불러오기 에러!");
			}
		});
	};

	const deleteItem = () => {
		item.useYn = false;
		item.products = [];
		APIs.editSection(item).then((res) => {
			if (res.status === 200) {
				alert("사용 안 함 처리 되었습니다.");
				push("/section");
			}
		});
		return;
	};
	const addItem = () => {
		item.products = productIds;
		item.useYn = useYn.value;
		APIs.addSection(item).then((res) => {
			if (res.status === 200) {
				alert("등록 되었습니다.");
				push("/section");
			} else {
				alert("문제가 발생했습니다.");
			}
		});
		return;
	};
	const modifyItem = () => {
		item.products = productIds;
		item.useYn = useYn.value;
		console.log(item);
		APIs.editSection(item).then((res) => {
			if (res.status === 200) {
				alert("수정되었습니다.");
			} else {
				alert("문제가 발생했습니다.");
			}
		});
		return;
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	{#if itemId !== "new"}
		<GreyBackgroundButton
			width="50px"
			height="30px"
			fontSize="16px"
			onClick={deleteItem}>삭제</GreyBackgroundButton
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
	<DetailRow head={true} title="상품코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="노출 순위">
		<BorderedInput fontSize="16px" type="number" bind:value={item.priority} />
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput
			alignCenter={false}
			fontSize="16px"
			width="80%"
			bind:value={item.title}
		/>
	</DetailRow>
	<DetailRow title="레이아웃">
		<BorderedInput fontSize="16px" type="number" bind:value={item.layout} />
		<LightGreyText fontSize="14px" marginLeft="10px">1 ~ 5</LightGreyText>
	</DetailRow>
	<DetailRow title="노출">
		<Radio
			name="useYn"
			bind:value={useYn}
			height="30px"
			width="80px"
			fontSize="16px"
			lists={useYns}
		/>
	</DetailRow>
	<DetailRow title="배경색">
		<BorderedInput
			fontSize="16px"
			type="color"
			bind:value={item.backgroundColor}
		/>
	</DetailRow>
	<DetailRow title="상품">
		{#if !loading}
			<ItemSearch bind:products={item.products} bind:productIds />
		{/if}
	</DetailRow>
</DetailPanelLayout>
