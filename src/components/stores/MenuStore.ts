import { writable, type Writable } from "svelte/store";

export let menus:Writable<string[][]> = writable([
  ["상품관리", "카테고리", "그룹 딜", "기획전", "섹션"],
  ["예약관리", "후기관리"],
  ["일반", "파트너", "관리자", "파트너 문의", "파트너 정산", "포인트 내역"],
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
  ["상품", "방문자"],
]);
export let routers:Writable<string[][]> = writable([
  ["/item", "/category", "/groupdeal", "/exhibition", "/section"],
  ["/reservation", "/review"],
  ["/member", "/partner", "/manager", "/qa", "/calculate", "/point"],
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