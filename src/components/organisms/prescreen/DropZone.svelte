<script>
	export let file;
	export let img;
	export let onEnd;

	let inputElement;

	let fileHandler = (e) => {
		file = e.target.files[0];
		img = URL.createObjectURL(file);
		onEnd();
	};
	let clicked = () => {
		inputElement.click();
	};
</script>

<button
	on:drop={fileHandler}
	on:click={clicked}
	style="background-color:{file === undefined ? '#ccc' : 'white'}"
>
	<input type="file" bind:this={inputElement} on:change={fileHandler} />
	{#if file === undefined}
		<p>클릭해서 파일 선택</p>
	{:else}
		<img src={img} alt="undefined" />
	{/if}
</button>

<style>
	button {
		width: 100%;
		height: 100%;
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
