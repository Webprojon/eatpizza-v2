import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-slate-100 dark:bg-slate-900 border-t border-gray-300 dark:border-gray-600 tracking-wider">
			<div className="h-[11vh] max-w-[1250px] mx-auto flex items-center justify-between text-sm">
				<span>
					&copy; Copyright 2022 - 2025 Central Europe LLC. All Rights Reserved.
				</span>
				<Link href="/">Privacy Policy</Link>
			</div>
		</footer>
	);
}
