"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function SubmitFormFeedback(formData: FormData) {
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
