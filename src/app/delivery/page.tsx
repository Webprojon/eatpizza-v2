import { FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import Input from "@/components/Input";
import Counter from "@/components/Basket-Components/Counter";
import Link from "next/link";
import prisma from "@/lib/db";
import ClearItems from "@/components/Basket-Components/ClearItems";
import { totalPrice } from "@/actions/actions";
import DeleteItem from "@/components/Basket-Components/DeleteItem";

export default async function Delivery() {
	const basketItems = await prisma.basket.findMany();

	return (
		<div className="h-screen md:h-[calc(100vh-11vh)] bg-slate-100 dark:bg-black/40 max-w-[1250px] mx-auto font-semibold tracking-wider rounded-md">
			{basketItems && basketItems.length === 0 ? (
				<div className="w-full md:w-[55%] lg:w-[45%] h-[25vh] mx-auto flex flex-col gap-y-6 justify-center items-center sm:rounded-md md:pt-14">
					<span className="text-lg">No item selected yet 😏</span>
					<Link
						href="/"
						className="flex bg-gradient-green bg-gradient-green-hover text-white transition-all rounded-md py-3 px-4"
					>
						Go to menu
					</Link>
				</div>
			) : (
				<div>
					{/* Header */}
					<div className="flex justify-between items-center w-full h-10 py-8 px-3">
						<Link href="/" className="flex items-center cursor-pointer">
							<FaChevronLeft className="size-6" />
							<span className="pl-2 font-semibold">Back</span>
						</Link>

						<span className="font-bold tracking-wide">
							Cart ({basketItems.length})
						</span>
						<ClearItems />
					</div>

					{/* Basket */}
					<div className="w-full px-3 py-10  md:h-[36vh] overflow-y-scroll no-scrollbar">
						{basketItems &&
							basketItems.map((item) => (
								<div key={item.id} className="mb-8">
									<div className="flex items-start justify-between">
										<Image
											width={200}
											height={200}
											src={item.itemImg}
											alt={item.itemName}
											className="w-[7rem] sm:w-[10rem]"
										/>
										<div className="flex flex-col md:items-center md:justify-between md:flex-row-reverse gap-y-4 w-[15rem] md:w-[30rem]">
											<div className="flex justify-between gap-x-6">
												<div>
													<h2 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
														{item.itemName}
													</h2>
													<p className="hidden text-sm text-gray-500 dark:text-gray-300 font-medium">
														{item.itemDescription}
													</p>
												</div>
												<DeleteItem itemId={item.id} />
											</div>

											<div className="flex justify-between gap-x-10">
												<Counter
													index={item.id}
													initialCount={item.itemCount}
												/>
												<p className="font-semibold text-gray-700 dark:text-gray-300">
													{item.itemPrice}.99 zł
												</p>
											</div>
										</div>
									</div>
								</div>
							))}

						<span className="text-2xl pr-2 font-bold text-gray-700 dark:text-gray-300">
							Total: {totalPrice()} zł
						</span>
					</div>

					{/* Contact information */}
					<div className="px-3 py-5">
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
								className="self-end bg-gradient-green font-semibold tracking-wider text-white px-3 py-2 rounded-md transition-all
							mt-[1.5rem]"
							>
								Submit Orders
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
