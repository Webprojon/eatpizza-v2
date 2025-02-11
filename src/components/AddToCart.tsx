"use client";
import { addItem } from "@/actions/actions";
import { ItemsType } from "@/lib/types";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";

const pizzaVolumes = [24, 29, 34, 39];
//const sauceVolumes = [25, 50];
//const drinkVolumes = [0.5, 0.85, 1.5];
//const creamVolumes = [100, 465];

export default function AddToCart({ product }: { product: ItemsType }) {
	const handleAddItem = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			toast.success("Item added successfully 🥳");
			await addItem(product.id);
		} catch (error) {
			console.error("Error adding product:", error);
		}
	};

	return (
		<>
			<div
				className={`flex rounded-md my-6 border border-gray-200 dark:border-slate-600`}
			>
				{pizzaVolumes.map((size) => (
					<div
						key={size}
						className="w-full text-center py-2 relative text-sm cursor-pointer rounded-md text-gray-600 dark:text-gray-400"
					>
						{size}
					</div>
				))}
			</div>

			<div className="flex justify-between items-end mt-10">
				<div className="text-md text-gray-700 dark:text-gray-400 font-bold pr-2">
					<span>{product.itemPrice}.99 zł</span>
				</div>

				<form onSubmit={handleAddItem}>
					<button className="bg-gradient-green bg-gradient-green-hover flex place-items-center text-sm transition-all text-white content-start font-semibold tracking-widest px-4 py-2 rounded-md tracking-wider">
						Add to
						<FaCartShopping className="ml-2" />
					</button>
				</form>
			</div>
		</>
	);
}
