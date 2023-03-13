import { writable, type Writable } from "svelte/store";

export let menus:Writable<string[][]> = writable([
  ["상품관리", "기획전", "그룹 딜", "카테고리", "섹션"],
  ["예약관리", "후기관리"],
  ["일반", "파트너", "관리자", "포인트 내역"],
  ["문자메시지", "푸쉬알림"],
  [
    "이벤트",
    "배너",
    "프리스크린",
    "검색/키워드",
    "환불규정",
    "포인트",
    "문자메시지",
    "푸쉬알림",
  ],
  ["상품", "방문자", "추가예정"],
]);
export let routers:Writable<string[][]> = writable([
  ["/item", "/exhibition", "/groupdeal", "/category", "/section"],
  ["/reservation", "/review"],
  ["/member", "/partner", "/manager", "/point"],
  ["/message", "push"],
  [
    "/event",
    "/banner",
    "/pre",
    "/keyword",
    "/refund",
    "/point",
    "/preset/message",
    "/preset/alarm",
  ],
  ["/stat/item", "/stat/user"],
]);
export let selected:Writable<number> = writable(-1);