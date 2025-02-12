import prisma from "@/lib/db";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ProductCards from "@/components/ProductCards";
import DesktopBasket from "@/components/DesktopBasket";
import MobileBasket from "@/components/MobileBasket";

export default async function Products() {
	const products = await prisma.products.findMany();

	return (
		<Suspense fallback={<Loading />}>
			<section className="max-w-[1250px] mx-auto my-4 flex flex-row justify-center lg:justify-between">
				<MobileBasket />
				<div className="px-2 sm:px-0 sm:mt-0">
					<ProductCards products={products} />
				</div>
				<DesktopBasket />
			</section>
		</Suspense>
	);
}
