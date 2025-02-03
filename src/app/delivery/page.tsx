"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";
import Input from "@/components/Input";
import { useGlobalContext } from "@/context/global-context";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Delivery() {
	const router = useRouter();
	const [totalPrice, setTotalPrice] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(0);
	const { choosenPizza, setChoosenPizza } = useGlobalContext();

	useEffect(() => {
		const storedChoosenItem = JSON.parse(
			localStorage.getItem("choosenItem") || "[]",
		);
		setChoosenPizza(storedChoosenItem);
	}, []);

	const shortenDescription = (
		description: string,
		maxLength: number,
	): string => {
		if (description.length > maxLength) {
			return `${description.split(" ").slice(0, 3).join(" ")}..`;
		}

		return description;
	};

	const deleteOneItem = (index: number, total: number) => {
		const updatedPizzas = [...choosenPizza];
		updatedPizzas.splice(index, 1);
		if (updatedPizzas.length < 1) {
			router.push("/");
		}

		localStorage.setItem("choosenItem", JSON.stringify(updatedPizzas));
		setChoosenPizza(updatedPizzas);
		setTotalPrice((prevPrice) => prevPrice - Math.floor(total));
		setNumberOfItems((numOfItem) => numOfItem - 1);
	};

	const clearAllItems = () => {
		setChoosenPizza([]);
		setTotalPrice(0);
		toast.success("Cart is empty ! Stay with us 😊");
		router.push("/");
		localStorage.removeItem("choosenItem");
	};

	const getTotalPrice = (total: number) => {
		setTotalPrice((prevPrice) => prevPrice + Math.floor(total));
	};

	const handleSubmited = () => {
		setTimeout(() => {
			toast.success("We have saved your address details 😊");
		}, 1000);
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="flex justify-center md:items-center h-[calc(100vh-11vh)] max-w-[1250px] mx-auto font-semibold tracking-wider"
		>
			{choosenPizza.length === 0 ? (
				<div className="w-full md:w-[55%] lg:w-[45%] md:h-[25vh] bg-slate-100 mx-auto flex flex-col gap-y-6 justify-center items-center sm:rounded-md dark:bg-black/40">
					<h1 className="text-[20px] leading-none">No item selected yet 😏</h1>
					<Link
						href="/"
						className="flex place-items-center bg-gradient-green bg-gradient-green-hover text-white transition-all rounded-md p-3"
					>
						Go to menu
					</Link>
				</div>
			) : (
				<div>
					{/* Header */}
					<div className="flex justify-between items-center w-full h-10 py-8 px-4 bg-slate-100 dark:bg-black/40">
						<div
							onClick={() => router.push("/menu")}
							className="flex items-center cursor-pointer"
						>
							<FaChevronLeft className="size-6" />
							<span className="pl-2 font-semibold">Back</span>
						</div>

						<span className="font-bold tracking-wide">
							Your Cart ({numberOfItems})
						</span>
						<ImBin onClick={() => clearAllItems()} className="size-6" />
					</div>
					{/* Basket */}
					<div className="w-full px-4 py-10 bg-slate-100 dark:bg-black/40 h-[36vh] overflow-y-scroll no-scrollbar">
						{choosenPizza &&
							choosenPizza.map((item, index: number) => (
								<div
									onLoad={() => {
										getTotalPrice(item.itemPrice);
										setNumberOfItems(choosenPizza.length);
									}}
									key={index}
									className="mb-8"
								>
									<div className="flex items-start justify-between">
										<Image
											className="w-[10rem]"
											quality="95"
											priority={true}
											width={200}
											height={200}
											src={item.itemImg}
											alt={item.itemName}
										/>
										<div className="flex flex-col md:items-center md:justify-between md:flex-row-reverse gap-y-4 w-[15rem] md:w-[25rem]">
											<div className="flex justify-between items-center gap-x-6">
												<div>
													<h2 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
														{item.itemName}
													</h2>
													<p className="hidden text-sm text-gray-500 dark:text-gray-300 font-medium">
														{item.itemDesc &&
															shortenDescription(item.itemDesc, 20)}
													</p>
												</div>
												<CgClose
													onClick={() => deleteOneItem(index, item.itemPrice)}
													className="cursor-pointer size-6"
												/>
											</div>

											<div className="flex justify-between gap-x-10">
												<Counter
													index={index}
													total={item.itemPrice}
													setTotalPrice={setTotalPrice}
													setNumberOfItems={setNumberOfItems}
												/>
												<p className="font-semibold text-gray-700 dark:text-gray-300">
													{item.itemPrice} zł
												</p>
											</div>
										</div>
									</div>
								</div>
							))}

						<div>
							<span className="text-2xl pr-2 font-bold text-gray-700 dark:text-gray-300">
								Total:
							</span>
							<span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
								{totalPrice} zł
							</span>
						</div>
					</div>
					{/* Contact information */}
					<div className="bg-slate-100 dark:bg-black/40 px-4 py-7 h-[38vh] overflow-y-scroll no-scrollbar">
						<h2 className="mb-2 font-bold text-gray-600 dark:text-gray-300 tracking-wider text-lg">
							Contact information
						</h2>

						<form className="relative flex flex-col gap-y-4">
							<div className="flex flex-col md:flex-row gap-6">
								<Input type="text" name="username" text="Your name" />
								<Input
									type="number"
									name="userphonenumber"
									text="+48 576 375 586"
								/>
								<Input type="text" name="userstreet" text="Street" />
								<div className="flex gap-x-4">
									<Input
										type="number"
										name="userflatnumber"
										text="Flat"
										size="sm"
									/>
									<Input
										type="number"
										name="userfloornumber"
										text="Floor"
										size="sm"
									/>
								</div>
							</div>
							<button
								onClick={handleSubmited}
								className="self-end bg-gradient-green font-semibold tracking-wider text-white px-3 py-2 rounded-sm transition-all
							mt-[1.5rem]"
							>
								Checkout Now
							</button>
						</form>
					</div>
				</div>
			)}
		</motion.div>
	);
}
