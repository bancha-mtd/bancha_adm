export interface SelectType {
	id: number;
	name: string;
	value: any;
}

export interface Item {
	id: number;
	productName: string;
	price: number;
	partnerName: string;
	managerName: string;
	saleCounts: number;
	views: number;
	createTime: string;
}

export interface ExhibitionItem {
	id: number;
	title: string;
	partners: number;
	items: number;
	startDate: string;
	endDate: string;
	views: number;
	sales: number;
}

export interface GroupDealItem {
	id: number;
	title: string;
	discountedPrice: number;
	partner: string;
	endDate: string;
	capacity: number;
}

export interface CategoryItem {
	id: number;
	title: string;
	items: string;
	active: boolean;
	priority: string;
	icon: string;
}

export interface SectionItem {
	id: number;
	title: string;
	priority: number;
	productCnt: number;
	useYn: boolean;
}

export interface ReservationItem {
	id: number;
	purchaseDate: string;
	status: boolean;
	reservationDate: string;
	reservationName: string;
	reservationPhone: string;
	title: string;
	itemId: number;
	price: number;
}

export interface ReviewItem {
	id: number;
	review: string;
	title: string;
	itemId: number;
	writer: string;
	writtenDate: string;
}

export interface MemberItem {
	id: number;
	email: string;
	nickName: string;
	grade: number;
	cellPhone: string;
	reviewCnt: number;
	buyCnt: number;
	paidSum: number;
	useYn: boolean;
	lastLogin: string;
	createDate: string;
}

export interface PartnerItem {
	id: number;
	userId: string;
	nickName: string;
	grade: number;
	ceoName: string;
	phoneNumber: string;
	reviewCnt: number;
	saleCnt: number;
	productCnt: number;
	state: boolean;
}

export interface ManagerItem {
	id: number;
	email: string;
	grade: number;
	nickname: string;
	group: string;
	active: boolean;
}

export interface PointItem {
	id: number;
	email: string;
	nickname: string;
	content: string;
	point: number;
	givenDate: string;
	expireDate: string;
	remain: number;
}

export interface MessageItem {
	id: number;
	title: string;
	content: string;
	sendDate: string;
	status: boolean;
}

export interface PushItem {
	id: number;
	content: string;
	sendDate: string;
	status: boolean;
}

export interface FAQItem {
	id: number;
	title: string;
	createtime: string;
	views: string;
}

export interface EventItem {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	views: number;
}

export interface BannerItem {
	id: number;
	title: string;
	priority: string;
	startDate: string;
	endDate: string;
	clicks: string;
}

export interface RefundItem {
	id: number;
	title: string;
}
