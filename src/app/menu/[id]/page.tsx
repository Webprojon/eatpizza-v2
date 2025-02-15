import AddToCart from "@/components/AddToCart";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

export default async function Product({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const product = await prisma.products.findUnique({
		where: {
			id: id,
		},
	});

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="relative h-screen md:h-[calc(100vh-11vh)] tracking-wider flex max-w-[1250px] mx-auto rounded-md bg-slate-100 dark:bg-black/40">
			<Link href={"/"} className="absolute top-6 right-5">
				<CgClose className="size-7" />
			</Link>

			<div className="flex flex-col gap-y-4 px-3 md:px-0 md:ml-8 pt-12 sm:pt-5 w-full md:w-[45%]">
				{product?.itemImg && (
					<Image
						width={200}
						height={200}
						alt="product img"
						src={product.itemImg}
						className="w-[10rem] md:w-[12rem]"
					/>
				)}
				<span className="font-semibold text-2xl">{product?.itemName}</span>
				<p>{product?.itemDescription}</p>

				<AddToCart product={product} />
			</div>
		</div>
	);
}
