"use client";
import { deleteItem } from "@/actions/actions";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";

export default function DeleteItem({ itemId }: { itemId: string }) {
	const handleDelete = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await deleteItem(itemId);
			toast.error("Item deleted successfully 😏");
		} catch (error) {
			console.error("Error deleting product:", error);
		}
	};

	return (
		<form onSubmit={handleDelete}>
			<button
				type="submit"
				className="absolute top-0 right-0 cursor-pointer size-5"
			>
				<CgClose />
			</button>
		</form>
	);
}
