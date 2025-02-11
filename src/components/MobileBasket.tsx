"use client";
import { useGlobalContext } from "@/context/global-context";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export default function MobileBasket() {
	const { choosenPizza } = useGlobalContext();
	const router = useRouter();

	return (
		<div className="hidden">
			{choosenPizza.length === 0 ? (
				""
			) : (
				<div
					onClick={() => router.push("/delivery")}
					className="fixed bottom-6 right-4 z-10 bg-red-600 dark:bg-red-900 py-[.9rem] px-4 rounded-full"
				>
					<span className="flex items-center justify-center font-semibold tracking-wider text-white text-md">
						<FaCartShopping className="mr-2" />
						{choosenPizza && choosenPizza[0].itemPrice} zł
					</span>
				</div>
			)}
		</div>
	);
}
