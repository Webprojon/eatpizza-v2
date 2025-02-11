interface InputProps {
	type: string;
	name?: string;
	text?: string;
	size?: string;
}

export default function Input({
	type,
	name = "",
	text = "",
	size = "",
}: InputProps) {
	return (
		<input
			type={type}
			name={name}
			placeholder={text}
			autoComplete="off"
			className={`outline-green-500 tracking-wider text-gray-500 placeholder:text-gray-500 px-3 py-2 rounded-md
        dark:outline-none dark:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-300 bg-transparent border border-gray-400 dark:border-gray-700
        ${size === "sm" ? "w-[8rem]" : ""}`}
		/>
	);
}
