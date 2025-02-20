import { type ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between items-center bg-gray-500 text-blue px-5 h-12 rounded-xl font-semibold w-full cursor-pointer transition-all duration-200 hover:bg-blue hover:text-gray-900 active:brightness-110"
			{...props}
		/>
	);
}
