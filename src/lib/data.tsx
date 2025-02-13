import {
	MdOutlineDeliveryDining,
	MdOutlineFeedback,
	MdRestaurantMenu,
} from "react-icons/md";

export const LINKS = [
	{
		id: 1,
		href: "/",
		icon: <MdRestaurantMenu className="size-6" />,
		label: "Menu",
	},
	{
		id: 2,
		href: "/delivery",
		icon: <MdOutlineDeliveryDining className="size-6" />,
		label: "Delivery",
	},
	{
		id: 3,
		href: "/feedback",
		icon: <MdOutlineFeedback className="size-6" />,
		label: "Feedback",
	},
];
