<script>
	export let file;
	export let onEnd;

	let inputElement;

	let fileHandler = (e) => {
		let reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			let base64 = reader.result;
			console.log(base64);
			console.log(e.target.files[0]);
			if (base64) {
				file = base64.toString();
				onEnd();
			}
		};
	};
	let clicked = () => {
		inputElement.click();
	};
</script>

<button on:drop={fileHandler} on:click={clicked}>
	<input type="file" bind:this={inputElement} on:change={fileHandler} />
	<p>클릭해서 파일 선택</p>
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
</style>
