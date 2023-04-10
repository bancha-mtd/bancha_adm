<ul>
	<slot />
</ul>

<style>
	ul {
		border: 1px solid #aaa;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 400px;
		overflow-y: scroll;
	}
	ul::-webkit-scrollbar {
		width: 10px;
	}
	ul::-webkit-scrollbar-thumb {
		background-color: white;
		border-radius: 10px;
		background-clip: padding-box;
		border: 2px solid transparent;
	}
	ul::-webkit-scrollbar-track {
		background-color: #ccc;
		box-shadow: inset 0px 0px 5px white;
	}
</style>
