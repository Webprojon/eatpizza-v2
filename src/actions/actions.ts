"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addItem(productId: string) {
	try {
		const product = await prisma.products.findUnique({
			where: {
				id: productId.toString(),
			},
		});

		if (!product) {
			throw new Error("Product not found");
		}

		const newItem = await prisma.basket.create({
			data: {
				productId: product.id,
				itemImg: product.itemImg,
				itemName: product.itemName,
				itemPrice: product.itemPrice,
				itemCategory: product.itemCategory,
				itemDescription: product.itemDescription,
			},
		});

		if (!newItem) {
			throw new Error("Failed to create new item in the basket.");
		}

		revalidatePath("/");
	} catch (error) {
		console.log(error);
	}
}

/////////////////////////////////////////////////////////////////////

export async function deleteItem(productId: string) {
	try {
		const deleteOneItem = await prisma.basket.delete({
			where: {
				id: productId,
			},
		});

		if (!deleteOneItem) {
			throw new Error("Product not found");
		}

		revalidatePath("/");

		return deleteOneItem;
	} catch (error) {
		console.error("Error deleting item:", error);
		throw error;
	}
}

/////////////////////////////////////////////////////////////////////

export async function clearItems() {
	try {
		const deleteOneItem = await prisma.basket.deleteMany();

		if (!deleteOneItem) {
			throw new Error("Product not found");
		}

		revalidatePath("/");

		return deleteOneItem;
	} catch (error) {
		console.error("Error deleting item:", error);
		throw error;
	}
}

/////////////////////////////////////////////////////////////////////

export async function submitAddress(formData: FormData) {
	try {
		await prisma.address.create({
			data: {
				userAddress: formData.get("useraddress") as string,
				userFlat: formData.get("userflat") as string,
				userFloor: formData.get("userfloor") as string,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/modal-address");
}

/////////////////////////////////////////////////////////////////////

export async function submitFeedback(formData: FormData) {
	const userName = formData.get("username") as string;
	const userFeedback = formData.get("userfeedback") as string;

	try {
		await prisma.feedback.create({
			data: {
				userName: userName,
				userFeedback: userFeedback,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/feedback");
}

/////////////////////////////////////////////////////////////////////

export async function submitPromocode(formData: FormData) {
	try {
		await prisma.promocode.create({
			data: {
				promocode: formData.get("promocode") as string,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/delivery");
}
