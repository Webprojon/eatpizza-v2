"use client";
import React from "react";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { submitFeedback } from "@/actions/actions";

export default function Feedback() {
	const router = useRouter();

	const handleSubmited = () => {
		setTimeout(() => {
			toast.success("Your feedback is saved 😊 !");
		}, 1000);

		setTimeout(() => {
			router.push("/");
		}, 1800);
	};

	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="flex flex-col items-center md:justify-center max-w-[1250px] h-[calc(100vh-11vh)] mx-auto lg:rounded-md bg-slate-100 dark:bg-black/40 px-3"
		>
			<h2 className="font-semibold my-6 text-2xl tracking-wider leading-none">
				Feedback Us
			</h2>
			<form
				action={submitFeedback}
				className="flex flex-col gap-y-4 w-full md:w-[40rem]"
			>
				<input
					type="text"
					name="username"
					autoComplete="off"
					placeholder="Your name"
					className="p-3 tracking-wider rounded-md outline-green-500 placeholder:text-gray-500 dark:outline-none bg-transparent dark:bg-transparent dark:placeholder:text-gray-300 border border-gray-400 dark:border-gray-700"
				/>
				<textarea
					rows={6}
					id="userfeedback"
					name="userfeedback"
					placeholder="Your feedback..."
					className="p-3 rounded-md outline-green-500 placeholder:text-gray-500 dark:outline-none bg-transparent dark:bg-transparent dark:placeholder:text-gray-300 border border-gray-400 dark:border-gray-700"
				></textarea>
				<button
					onClick={handleSubmited}
					className="bg-gradient-green bg-gradient-green-hover font-semibold tracking-wider text-white p-3 rounded-md transition-all"
				>
					Send Feedback
				</button>
			</form>
		</motion.section>
	);
}
