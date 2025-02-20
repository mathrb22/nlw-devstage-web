import type { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
	return (
		<button
			className="flex justify-between items-center bg-gray-500 text-blue p-1.5 rounded-md cursor-pointer transition-all duration-200 hover:bg-blue hover:text-gray-900 active:brightness-110"
			{...props}
		/>
	);
}
