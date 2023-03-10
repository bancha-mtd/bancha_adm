<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "상품명";
	export let discountedPrice: string = "할인금액";
	export let partner: string = "파트너";
	export let dateEnd: string = "마감일자";
	export let capacity: string = "모집인원";
</script>

<ListItemLayout>
	<Text width="15%">{id}</Text>
	<LinkedText to="/groupdeal/{id}" width="25%">{title}</LinkedText>
	<Text width="15%">{discountedPrice}</Text>
	<Text width="15%">{partner}</Text>
	<Text width="15%">{dateEnd}</Text>
	<Text width="15%">{capacity}</Text>
</ListItemLayout>
