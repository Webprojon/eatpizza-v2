import AddToCart from "@/components/AddToCart";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

export default async function Product({ params }: { params: { id: string } }) {
	const product = await prisma.products.findUnique({
		where: {
			id: params.id,
		},
	});

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="md:flex gap-x-10 items-end justify-between max-w-[1250px] mx-auto md:p-7 rounded-md bg-slate-100 dark:bg-black/40 backdrop-blur-sm">
			<Link href={"/menu"} className="absolute top-6 right-5">
				<CgClose className="size-7" />
			</Link>

			<div className="md:w-[55%]">
				{product?.itemImg && (
					<Image
						src={product.itemImg}
						width={200}
						height={200}
						alt="product img"
						className="w-[15rem]"
					/>
				)}
				<h2 className="mt-6 mb-3 font-semibold text-2xl tracking-wider text-gray-700 dark:text-gray-300">
					{product?.itemName}
				</h2>
				<p className="text-sm text-gray-500 tracking-wider leading-6 dark:text-gray-300">
					{product?.itemDescription}
				</p>
			</div>

			<div className="md:w-[45%]">
				<AddToCart product={product} />
			</div>
		</div>
	);
}
