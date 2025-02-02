"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function SubmitFormModalAddress(formData: FormData) {
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
