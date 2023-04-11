<script>
	export let file;
	export let img = "";
	export let onEnd = () => {};
	export let width = "100%";
	export let height = "100%";

	let inputElement;

	const fileHandler = (e) => {
		file = e.target.files[0];
		console.log(e.target.files[0]);
		img = URL.createObjectURL(file);
		onEnd();
	};
	const clicked = () => {
		inputElement.click();
	};
</script>

<button
	on:drop={fileHandler}
	on:click={clicked}
	style="background-color:{file === undefined
		? '#eee'
		: 'white'};width:{width};height:{height}"
>
	<input
		accept="image/*"
		type="file"
		bind:this={inputElement}
		on:change={fileHandler}
	/>
	{#if file === undefined}
		<p>클릭해서 파일 선택</p>
	{:else}
		<img src={img} alt="undefined" />
	{/if}
</button>

<style>
	button {
		background-color: #ccc;
	}
	input {
		display: none;
	}
	p {
		font-family: "Noto Sans KR";
		font-size: 18px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
