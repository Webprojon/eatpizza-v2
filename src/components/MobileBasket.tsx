import prisma from "@/lib/db";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default async function MobileBasket() {
	const basketItems = await prisma.basket.findMany();

	return (
		<div className="md:hidden">
			{basketItems.length === 0 ? (
				""
			) : (
				<Link
					href="/delivery"
					className="fixed bottom-6 right-4 z-10 bg-red-600 dark:bg-red-900 p-4 rounded-md"
				>
					<span className="flex items-center font-semibold tracking-wider text-white text-[18px]">
						<FaCartShopping className="mr-3 size-5" />
						{basketItems && basketItems[0].itemPrice} zł
					</span>
				</Link>
			)}
		</div>
	);
}
