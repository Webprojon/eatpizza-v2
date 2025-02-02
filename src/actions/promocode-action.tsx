"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function SubmitFormBasket(formData: FormData) {
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
