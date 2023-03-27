<script>
	let zipcode;
	let sigungu;
	let address;
	let detailaddress;
	function findAddr() {
		new daum.Postcode({
			oncomplete: function (data) {
				console.log(data);
				zipcode = data.zonecode;
				sigungu = data.sigungu;
				address = data.roadAddress;
			},
		}).open();
	}
</script>

<svelte:head>
	<script
		src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
	></script>
</svelte:head>

<input bind:value={zipcode} on:click={findAddr} />
<input bind:value={sigungu} />
<input bind:value={address} />
<input bind:value={detailaddress} />

<style>
	input {
		width: 500px;
		height: 50px;
		font-size: 18px;
	}
</style>
