export interface Product {
  addr: string; // 시군구
  address: string; // 전체 주소
  afterPrice: number; // 최종 가격
  autoConfirm: string | boolean; // 자동 확정 여부
  basicUserInfo: string; // 기준 인원
  checkList: string; // 공지사항
  createtime: string; // 생성 시간
  exclude: string; // 불포함
  facilities: string; // 해시태그
  id: number; // PK
  include: string; // 포함
  isBanchaPlaning: boolean | string; // 반차 기획 여부
  label: string; // 전체 라벨
  latitude: string; // 위도
  longitude: string; // 경도
  manualLabel: string; // 라벨
  managerId: number; // 담당자 PK
  maxAge: number; // 최대 나이
  minAge: number; // 최소 나이
  optionTitle: string;
  partnerId: number; // 파트너 PK
  postNum: string; // 우편번호
  prePrice: number; // 초기 가격
  productImageUrl: string; // 상품 상세 이미지
  productText: string; // 없음
  programContentText: string; // 체험포인트
  programSummary: string; // 없음
  random_show?: boolean | string; // 랜덤 노출 여부
  recommendAge: string; // 없음
  refundTypeId: number; // 환불 규정 PK
  remark: string; // 비고
  reservationDay: string; // 예약 가능 요일
  subTitle: string; // 부제목
  target: string; // 타겟
  thumbnail01?: string; // 썸네일
  thumbnail02?: string;
  thumbnail03?: string;
  thumbnail04?: string;
  thumbnail05?: string;
  title: string; // 제목
  useMinute: number; // 소요 시간
  useYn: boolean; // 노출 여부
}

export interface Section {
  title: string;
  priority: number;
  remark: string;
  layout: number;
  backgroundColor: string;
  useYn: boolean;
  products: number[];
}
