"use client";

import { clearItems } from "@/actions/actions";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ClearItems() {
	const handleClear = async () => {
		try {
			await clearItems();
			toast.error("All Items cleared successfully 😏");
		} catch (error) {
			console.error("Error clearing basket:", error);
		}
	};

	return (
		<Link href="/" onClick={handleClear}>
			Clear
		</Link>
	);
}
