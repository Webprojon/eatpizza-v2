import { StaticImageData } from "next/image";

export interface ItemsType {
	itemId: number;
	itemCategory: string;
	itemImg: StaticImageData;
	itemName: string;
	itemDescription?: string;
	itemPrice?: number;
}

export type SelectedItemType = {
	[key: number]: number;
};
