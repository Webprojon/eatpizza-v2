"use client";
import { useGlobalContext } from "@/context/global-context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Counter({ index }: { index: number }) {
	const { choosenPizza, setChoosenPizza } = useGlobalContext();
	const [count, setCount] = useState(1);
	const router = useRouter();

	const delOneItem = () => {
		setCount((prevDel) => prevDel - 1);
		if (count === 1) {
			setCount(1);
			const updatedPizzas = [...choosenPizza];
			updatedPizzas.splice(index, 1);
			if (updatedPizzas.length < 1) {
				router.push("/");
			}

			localStorage.setItem("choosenItem", JSON.stringify(updatedPizzas));
			setChoosenPizza(updatedPizzas);
		}
	};

	const addOneItem = () => {
		setCount((prevAdd) => prevAdd + 1);
	};

	return (
		<div className="flex items-center justify-between w-[6rem]">
			<span onClick={delOneItem}>
				<FaMinus
					className="hover:scale-90 transition-all bg-gradient-green text-white
					size-[1.4rem] rounded-full p-1 cursor-pointer"
				/>
			</span>
			<span>{count}</span>
			<span onClick={addOneItem}>
				<FaPlus
					className="hover:scale-110 transition-all bg-gradient-green text-white
					size-[1.4rem] rounded-full p-1 cursor-pointer"
				/>
			</span>
		</div>
	);
}
