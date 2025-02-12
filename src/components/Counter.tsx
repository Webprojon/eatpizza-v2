"use client";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Counter({ index }: { index: number }) {
	console.log(index);
	return (
		<div className="flex items-center justify-between w-[6rem]">
			<span>
				<FaMinus
					className="hover:scale-90 transition-all bg-gradient-green text-white
					size-[1.4rem] rounded-full p-1 cursor-pointer"
				/>
			</span>
			<span>1</span>
			<span>
				<FaPlus
					className="hover:scale-110 transition-all bg-gradient-green text-white
					size-[1.4rem] rounded-full p-1 cursor-pointer"
				/>
			</span>
		</div>
	);
}
