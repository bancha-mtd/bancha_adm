<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	interface Item {
		id: string;
		productName: string;
		price: string;
		partnerName: string;
		managerName: string;
		saleCounts: string;
		views: string;
		createTime: string;
	}

	export let item: Item = {
		id: "코드",
		productName: "상품명",
		price: "금액",
		partnerName: "파트너",
		managerName: "담당자",
		saleCounts: "판매량",
		views: "조회수",
		createTime: "업로드 시간",
	};
	const hide: (id: string) => void = () => {};
</script>

<ListItemLayout>
	<Text width="10%">{item.id}</Text>
	<LinkedText to="/item/{item.id}" width="24%">{item.productName}</LinkedText>
	<Text width="10%">{item.price}</Text>
	<Text width="10%">{item.partnerName}</Text>
	<Text width="10%">{item.managerName}</Text>
	<Text width="10%">{item.saleCounts}</Text>
	<Text width="10%">{item.views}</Text>
	<Text width="10%">{new Date(item.createTime).toLocaleString()}</Text>
	<GreyBackgroundButton
		height="30px"
		fontSize="16px"
		onClick={() => {
			hide(item.id);
		}}>숨기기</GreyBackgroundButton
	>
</ListItemLayout>
