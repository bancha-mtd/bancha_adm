<script lang="ts">
	import MenuSection from "../../molecules/menu/MenuSection.svelte";
	import { menus, routers } from "../../stores/MenuStore";
</script>

<div>
	<MenuSection
		title="상품"
		menus={$menus[0]}
		routers={$routers[0]}
		startIdx={0}
	/>
	<MenuSection
		title="예약"
		menus={$menus[1]}
		routers={$routers[1]}
		startIdx={5}
	/>
	<MenuSection
		title="회원"
		menus={$menus[2]}
		routers={$routers[2]}
		startIdx={7}
	/>
	<MenuSection
		title="알림"
		menus={$menus[3]}
		routers={$routers[3]}
		startIdx={13}
	/>
	<MenuSection
		title="설정"
		menus={$menus[4]}
		routers={$routers[4]}
		startIdx={15}
	/>
	<MenuSection
		title="통계"
		menus={$menus[5]}
		routers={$routers[5]}
		startIdx={23}
	/>
</div>
