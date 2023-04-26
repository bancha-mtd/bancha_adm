<script lang="ts">
	import type { SearchPhraseItem } from "../../utils/Types";
	import APIs from "../../utils/APIs";

	export let item: SearchPhraseItem = { id: -1, contents: "검색창 문구" };
	export let reload: () => void;
	const del = () => {
		APIs.deleteSearchPhrase(item.id).then((res) => {
			reload();
		});
	};
</script>

<li class="wrapper">
	{item.contents}
	<button on:click={del}> ✖ </button>
</li>

<style>
	li {
		list-style: none;
	}
	.wrapper {
		padding: 10px;
		border: 1px solid black;
		border-radius: 10px;
		display: flex;
		gap: 20px;
	}
	button {
		color: red;
	}
</style>
